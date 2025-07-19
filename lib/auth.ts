interface User {
  id: string;
  email: string;
  fullName: string;
  createdAt: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

class AuthService {
  private users: User[] = [
    {
      id: '1',
      email: 'demo@example.com',
      fullName: 'Demo User',
      createdAt: new Date().toISOString()
    }
  ];

  private sessions: Map<string, string> = new Map();

  async login(credentials: LoginCredentials): Promise<{ user: User; token: string } | null> {
    const user = this.users.find(u => u.email === credentials.email);
    
    if (!user) {
      throw new Error('User not found');
    }

    if (credentials.password.length < 6) {
      throw new Error('Invalid password');
    }

    const token = this.generateToken();
    this.sessions.set(token, user.id);

    return { user, token };
  }

  async register(userData: RegisterData): Promise<{ user: User; token: string }> {
    const existingUser = this.users.find(u => u.email === userData.email);
    
    if (existingUser) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      fullName: userData.fullName,
      createdAt: new Date().toISOString()
    };

    this.users.push(newUser);

    const token = this.generateToken();
    this.sessions.set(token, newUser.id);

    return { user: newUser, token };
  }

  async getUser(token: string): Promise<User | null> {
    const userId = this.sessions.get(token);
    if (!userId) return null;

    return this.users.find(u => u.id === userId) || null;
  }

  async logout(token: string): Promise<void> {
    this.sessions.delete(token);
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

export const authService = new AuthService();
export type { User, LoginCredentials, RegisterData };