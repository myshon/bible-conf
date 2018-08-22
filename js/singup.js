new Vue({
    el: '#signup',
    data: {
        message: 'Hello Vue.js!',
        opened: true,
        email: "",
        firstname: "",
        lastname: "",
        people: 1,
        registration_type: "",
        hotel_all: false,
        house_all: false,
        friday: 
        {
            breakfast: false,
            lunch: false,
            supper: false,
            house_night: false,
            hotel_night: false,
            meal_type: "",
        }
    },
    computed: {
        show_all : function() {
            return this.registration_type === "all";
        },
        show_some : function() {
            return this.registration_type === "some";
        }
    }
})