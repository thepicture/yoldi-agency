import useNotification from 'antd/lib/notification/useNotification';
import { ReactElement, useMemo } from 'react';

import { Context } from '@/pages/_app';

export const useNotificationContext = () => {
    return useMemo(() => ({ name: 'Notification' }), []);
};

export const useNotificationLibrary = (
    domain: string,
): [ReactElement, (text: string) => void] => {
    const [api, contextHolder] = useNotification();

    const notify = (text: string) => {
        api.info({
            message: domain,
            description: <Context.Consumer>{() => text}</Context.Consumer>,
        });
    };

    return [contextHolder, notify];
};
