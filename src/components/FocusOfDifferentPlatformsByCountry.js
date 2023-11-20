import React, { useEffect, useRef } from 'react';

const DistributionOfFocusedRegion = () => {
    const ref = useRef();
    const url = "https://public.tableau.com/shared/PFX56FXQG?:display_count=n&:origin=viz_share_link";

    useEffect(() => {
        if (window.tableau) {
            new window.tableau.Viz(ref.current, url);
        }
    }, []);

    return <div ref={ref}/>;
}

export default DistributionOfFocusedRegion;