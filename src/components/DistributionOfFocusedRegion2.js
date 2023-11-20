import React, { useEffect, useRef } from 'react';

const DistributionOfFocusedRegion2 = () => {
    const ref = useRef();
    const url = "https://public.tableau.com/views/AnalysisforCANIS2/langdisrtib?:language=en-GB&:display_count=n&:origin=viz_share_link";

    useEffect(() => {
        if (window.tableau) {
            new window.tableau.Viz(ref.current, url);
        }
    }, []);

    return <div ref={ref}/>;
}

export default DistributionOfFocusedRegion2;