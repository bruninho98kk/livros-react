import styles from "./page.module.css";
import Header from "./components/header";
// import Footer from "./components/footer";
// import Section from "./components/section";
// import Cards from "./components/cards";

export default function Home() {
  return (
    <div className={styles.bookstoreContainer}>

      <Header />
      {/* <Footer />
      <Section />
      <Cards /> */}

    </div>
  );
}