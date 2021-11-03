const styles = {
  headerHomePage: {
    fontSize: "40px",
    marginTop: "100px",
    color: "white",
  },
};

export default function HomePage() {
  return (
    <div>
      <h1 style={styles.headerHomePage}>
        Greetings, this app is a phone book. Here you can register and add your
        contacts
      </h1>
    </div>
  );
}
