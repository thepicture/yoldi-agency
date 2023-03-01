import React from 'react';

import { ProfileDto } from '@/shared/api/yoldi/profile';
import { Cover } from '@/shared/ui/Cover';
import { MainAccount } from '@/shared/ui/MainAccount';

export type UserProps = {
    profileDto: ProfileDto;
    onNotify: (message: string) => void;
    onEdit: () => void;
    hostname: string;
    isMe: boolean;
};

export const User: React.FC<UserProps> = ({
    profileDto,
    onNotify,
    onEdit,
    hostname,
    isMe,
}) => {
    return (
        <>
            <Cover profileDto={profileDto} onNotify={onNotify} isMe={isMe} />
            <MainAccount
                profileDto={profileDto}
                onEdit={onEdit}
                hostname={hostname}
                isMe={isMe}
            />
        </>
    );
};
