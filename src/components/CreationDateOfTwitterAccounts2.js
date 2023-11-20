import React, { useEffect, useRef } from 'react';

const CreationDateOfTwitterAccounts2 = () => {
    const ref = useRef();
    const url = "https://public.tableau.com/views/Twitterusers_17004289378600/Sheet4?:language=en-GB&:display_count=n&:origin=viz_share_link";

    useEffect(() => {
        if (window.tableau) {
            new window.tableau.Viz(ref.current, url);
        }
    }, []);

    return <div ref={ref}/>;
}

export default CreationDateOfTwitterAccounts2;