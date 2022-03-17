import React from 'react';
import { useAuth } from '../contexts/auth';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';

const Routes: React.FC = () => {
     const { signed, loading } = useAuth();

    if(loading) {
        return (
            <div>
                <h1>Carregando página...</h1>
            </div>
        )
    }
    return signed ? <OtherRoutes /> : <SignRoutes />
};

export default Routes;