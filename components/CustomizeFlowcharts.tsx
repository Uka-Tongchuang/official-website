import pic from '@/public/flexiblePage/flowchart.png';
import Image from 'next/image';

function CustomizeFlowcharts() {
    return (
        <Image width="800" height="535" src={pic} alt="Flow Chart" loading='lazy'/>
    );
}

export default CustomizeFlowcharts;
