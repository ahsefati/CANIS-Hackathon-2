import React, { useEffect, useRef } from 'react';

const DistributionOfLanguages2 = () => {
    const ref = useRef();
    const url = "https://public.tableau.com/views/CANIS-Lang/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

    useEffect(() => {
        if (window.tableau) {
            new window.tableau.Viz(ref.current, url);
        }
    }, []);

    return <div ref={ref}/>;
}

export default DistributionOfLanguages2;