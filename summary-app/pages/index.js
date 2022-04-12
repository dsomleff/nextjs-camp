import MeetupList from "../components/meetups/MeetupList";

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
    return <MeetupList meetups={props.meetups}/>;
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}