import { useRouter } from 'next/router';

export const useNavigateToLogin = () => {
    const router = useRouter();

    return () => router.push('/login');
};
