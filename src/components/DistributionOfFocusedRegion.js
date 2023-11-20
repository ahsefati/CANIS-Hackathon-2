import React, { useEffect, useRef } from 'react';

const DistributionOfFocusedRegion = () => {
    const ref = useRef();
    const url = "https://public.tableau.com/views/AnalysisforCANIS2/map1?:language=en-GB&:display_count=n&:origin=viz_share_link";

    useEffect(() => {
        if (window.tableau) {
            new window.tableau.Viz(ref.current, url);
        }
    }, []);

    return <div ref={ref}/>;
}

export default DistributionOfFocusedRegion;