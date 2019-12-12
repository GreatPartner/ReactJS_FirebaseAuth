import firebase from '../../src/firebaseConfig'

const databaseRef = firebase.database().ref()

const statCardsRef = databaseRef.child('stat-cards')

const addStatCardAction = (
  statName,
  statDescription,
  statIcon,
  statIconColor,
  statFooterIcon,
  statFooterIconstate,
  statFooterPercentage,
  statFooterText
) => async dispatch => {
  // TODO here we'll make a call to our database to add our new stat card with the above details
  statCardsRef
    .push()
    .set({
      statName: statName,
      statDescription: statDescription,
      statIcon: statIcon,
      statIconColor: statIconColor,
      statFooterIcon: statFooterIcon,
      statFooterIconstate: statFooterIconstate,
      statFooterPercentage: statFooterPercentage,
      statFooterText: statFooterText
    })
    .then(() => {
      dispatch({
        type: 'add'
      })
    })
}

export default addStatCardAction
