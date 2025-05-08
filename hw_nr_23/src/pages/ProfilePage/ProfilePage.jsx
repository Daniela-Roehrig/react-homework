import Profile from "../../modules/Profile/Profile";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

const ProfilePage = () => {
    return (
        <Container>
            <PageTitle>Profile</PageTitle>
            <Profile />
        </Container>
    )
}

export default ProfilePage;