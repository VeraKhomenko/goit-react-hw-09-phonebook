import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Phonebook
      <span role="img" aria-label="Иконка приветствия">
      </span>
    </h1>
  </div>
);

// class HomeView extends React.Component {

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   render() {
//     return this.items().map(item => (
//         return <li>{item.name}</li>;
//     ));
//   }

//   items = () => {
      
//   }

// }

export default HomeView;
