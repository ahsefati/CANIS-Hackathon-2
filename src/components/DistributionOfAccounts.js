import React, { useEffect, useRef } from 'react';

const DistributionOfAccounts = () => {
    const ref = useRef();
    const url = "https://public.tableau.com/shared/NBDMMQ5CM?:display_count=n&:origin=viz_share_link";

    useEffect(() => {
        if (window.tableau) {
            new window.tableau.Viz(ref.current, url);
        }
    }, []);

    return <div ref={ref}/>;
}

export default DistributionOfAccounts;