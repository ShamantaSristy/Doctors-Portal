import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Our Address',
        description: 'Brooklyn,NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+18763438965',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center ">
            <div className='w-75 row'>
                {
                    infoData.map((info => <InfoCard info={info}></InfoCard>))
                }
            </div>
        </section>
    );
};

export default BusinessInfo;