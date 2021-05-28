import React, {Component} from 'react';
import { connect } from 'react-redux';
import ContactForm from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import contactsOperations from '../../redux/contactsOperations';
// import { fetchContacts } from '../../redux/contactsOperations';
import { getLoading, getError } from '../../redux/contactsSelectors';
import { SpinnerComponent } from 'react-element-spinner';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { isError } = this.props;
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm />

        <h2>Contacts</h2>

        <Filter />
        {this.props.isLoadingContacts && (
          <SpinnerComponent loading={true} position="global" />
        )}
         <h2>Contacts</h2>
          {isError && <h2>{isError}</h2>}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  isError: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);