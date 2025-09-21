const Profile = ({ user }) => {
    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Perfil del Usuario</h1>
        {user ? (
            <p>Nombre de usuario: <b>{user.username}</b></p>
        ) : (
            <p>No estás autenticado.</p>
        )}
        </div>
    );
};

export default Profile;
