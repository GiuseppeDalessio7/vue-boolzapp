
const {
  createApp
} = Vue
createApp({
  data() {
    return {
      searchText: '', //testo inserito nell'input di ricerca
      newMessagge: "",
      me: {
        avatar: './assets/img/avatar_2.jpg',
        name: 'Giuseppe'
      },
      activeContact: 0,
      contacts: [
        {
          id: 1,
          name: 'Michele',
          avatar: './assets/img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '16:15',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Sofia',
          avatar: './assets/img/avatar_io.jpg',
          visible: true,
          messages: [{
            date: '16:30',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '16:30',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '16:35',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
          ],
        },
        {
          name: 'Samuele',
          avatar: './assets/img/avatar_3.jpg',
          visible: true,
          messages: [{
            date: '10:10',
            message: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '10:20',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '16:15',
            message: 'Ah scusa!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './assets/img/avatar_4.jpg',
          visible: true,
          messages: [{
            date: '15:30',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '15:50',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './assets/img/avatar_5.jpg',
          visible: true,
          messages: [{
            date: '15:30',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
          },
          {
            date: '15:50',
            message: 'Va bene, stasera la sento',
            status: 'received'
          }
          ],
        },
        {
          name: 'Claudia',
          avatar: './assets/img/avatar_6.jpg',
          visible: true,
          messages: [{
            date: '15:30',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
          },
          {
            date: '15:50',
            message: 'Non ancora',
            status: 'received'
          },
          {
            date: '15:51',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
          }
          ],
        },
        {
          name: 'Federico',
          avatar: './assets/img/avatar_7.jpg',
          visible: true,
          messages: [{
            date: '15:30',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
          },
          {
            date: '15:50',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Davide',
          avatar: './assets/img/avatar_8.jpg',
          visible: true,
          messages: [{
            date: '15:30',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
          },
          {
            date: '15:50',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
          },
          {
            date: '15:51',
            message: 'OK!!',
            status: 'received'
          }
          ],
        }
      ]
    }
  },

  methods: {
    attivachat(index) {
      this.activeContact = index
    },

    addMessage() {
      // console.log(this.activeContact);
      let inviomessaggio = {
        date: "15.45",
        message: this.newMessagge,
        status: 'sent',
      }
      this.contacts[this.activeContact].messages.push(inviomessaggio);
      this.newMessagge = ""; // il this indica l'oggetto

      setTimeout(() => {
        let reply = {
          date: "15.50",
          message: "ok",
          status: 'received',
        }
        this.contacts[this.activeContact].messages.push(reply)
      }, 1000)
    },


    searchName() {  
            
      this.contacts.forEach((contact) => {

          const lowerSearch = this.searchText.toLowerCase();
          const lowerName = contact.name.toLowerCase();
          
          console.log(lowerName);


          if (lowerName.includes(lowerSearch)) {
              
             contact.visible = true;
              
              console.log(contact.visible);
          } else {

            contact.visible = false;
              console.log(contact.visible);
          }     
      });
     
  },


  }
}).mount('#app')











