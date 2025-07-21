'use client';
import { useAppSelector } from '../../lib/hooks';
import { selectToken } from '../../lib/features/authSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAppSelector(selectToken);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  return <>{token ? children : null}</>;
}
