import MeetupList from "../components/meetups/MeetupList";
import {Fragment} from "react";
import Head from "next/head";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Potemkinstairs.jpg',
        address: 'Address 5',
        description: 'Hello JuJu'
    },
    {
        id: 'm2',
        title: 'second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Potemkinstairs.jpg',
        address: 'Address 5',
        description: 'Hello JuJu'
    }
];

export default function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>NextJS Meetups</title>
                <meta name='title'/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    );
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//    
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }