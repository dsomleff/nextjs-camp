import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
    function addMeetup(data) {
        console.log({data}); 
    }
    
    return <NewMeetupForm onAddMeetup={addMeetup} />;
}