import Header from "../Header/Header";
import Profile from "../Profile/Profile";

function Main(props) {
  return (
    <>
      {props.loading && <div className="circle-preloader" />}

      <Header onLogout={props.handleLogout} />

      <Profile profile={props.profile} />
    </>
  );
}

export default Main;
