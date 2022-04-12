import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
    return (
      <MeetupDetail 
        image='https://upload.wikimedia.org/wikipedia/commons/8/87/Potemkinstairs.jpg'
        title='hello'
        address='street'
        description='hello'
      />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
      paths: [
          { params: { meetupId: 'm1'} },
          { params: { meetupId: 'm2'} }
      ]  
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId; // meetupId specified in [folderName]
    
    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Potemkinstairs.jpg',
                id: meetupId,
                title: 'hello',
                address:'street',
                description:'hello'
            }
        }
    };
} 