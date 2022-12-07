<script>
import { ref, reactive, computed, toHandlers } from 'vue';
import useValidate from '@vuelidate/core'
import { required, minLength, email, sameAs, helpers } from '@vuelidate/validators'
import VueNextSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'
export default {
    components: {
        'vue-select': VueNextSelect,
    },
    props: {
        selected_barcode: {},
        currentTab: {},

    },
    setup(props) {
        const state = reactive({
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            password: {
                password: '',
                confirm_password: '',
            },
            app_name: '',
            country: '',

        })


        const rules = computed(() => {
            return {
                first_name: { required: helpers.withMessage('The first name is required', required) },
                last_name: { required: helpers.withMessage('The last name is required', required) },
                email: { required: helpers.withMessage('The e-mail is required', required), email: helpers.withMessage("This is not a valid email address", email) },
                message: { required: helpers.withMessage('The message is required', required) },
                password: {
                    password: { required: helpers.withMessage('Password is required', required), minLength: helpers.withMessage('The length must be minimum 6 characters', minLength(6)) },
                    confirm_password: { required: helpers.withMessage('Please confirm your password', required), sameAs: helpers.withMessage('Passwords don\'t match', sameAs(state.password.password)) },
                },
                app_name: { required: helpers.withMessage('This bundle ID is required', required) },
                country: { required: helpers.withMessage('The country is required', required) },
            }
        })

        const msg = ref('');

        const v$ = useValidate(rules, state)
        const company = ref('');
        const create_acc = ref(true);
        const create_license = ref(false);
        const support_countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua And Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas The", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo The Democratic Republic Of The", "Cook Islands", "Costa Rica", "Cote D''Ivoire (Ivory Coast)", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "External Territories of Australia", "Falkland Islands", "Faroe Islands", "Fiji Islands", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia The", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey and Alderney", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and McDonald Islands", "Honduras", "Hong Kong S.A.R.", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau S.A.R.", "North Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man (Isle of)", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands Antilles", "Netherlands The", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory Occupied", "Panama", "Papua new Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Island", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts And Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Smaller Territories of the UK", "Solomon Islands", "Somalia", "South Africa", "South Georgia", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard And Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State (Holy See)", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (US)", "Wallis And Futuna Islands", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];

        return {

            state, v$, create_acc, create_license, support_countries, company, msg
        }
    },
    computed: {
        saveData() {

            this.state.message = 'I am interested in the following technologies:\n----------------------------------------\n\n';
            var listBarcodes = '';
            var tech = '';

            Object.keys(this.selected_barcode).forEach(el => {
                if (this.selected_barcode[el].length === 0)
                    return;
                else {
                    tech = el;
                    listBarcodes = this.selected_barcode[tech];
                    this.state.message += tech + ': ' + listBarcodes + '\n\n';
                }


            });

        },


    },
    methods: {
        submitForm() {

            this.v$.$validate()
            if (!this.v$.$error) {
                setTimeout(alert('Form successfully submitted'), 1000)
            }
            else {
                alert("Form failed validation")
            }

            return false;

        },

    }
}
</script>

<template>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <div id="contact-info" class="margin-bottom-50">
        <div id="contact-info" class="mouseon box_active container container-735">
            <p class="info-text text-center margin-bottom-50 form-center"> Enter your name and email and get access to
                all the
                goodies.</p>
            <div>
                <form id="quote" novalidate="novalidate" method="post" :action="action" enctype="multipart/form-data">
                    <input type="hidden" id="recaptcha_token" name="recaptcha_token" :data-sitekey="sitekey" />
                    <div class="row">
                        <div class="col-md-6 margin-bottom-30">
                            <div class="form-line">
                                <label for="first-name" class="sr-only"></label>
                                <input class="input   " type="text" id="first-name" name="first_name"
                                    v-model="state.first_name" placeholder="First Name"
                                    :class="{ 'notvalid': (v$.first_name.$error) }" />
                                <div class="form-message animated">

                                    <span class="validate-msg" v-if="v$.first_name.$error">
                                        {{ v$.first_name.$errors[0].$message }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 margin-bottom-30">
                            <div class="form-line">
                                <label for="last-name" class="sr-only"></label>
                                <input class="input validate " type="text" id="last-name" name="last_name"
                                    v-model="state.last_name" placeholder="Last Name"
                                    :class="{ 'notvalid': (v$.last_name.$error) }" />
                                <div class="form-message animated">
                                    <span class="validate-msg" v-if="v$.last_name.$error">
                                        {{ v$.last_name.$errors[0].$message }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="margin-bottom-30">
                        <div class="form-line">
                            <label for="email" class="sr-only"></label>
                            <input class="input validate" type="email" id="email" name="email" v-model="state.email"
                                placeholder="E-mail" :class="{ 'notvalid': (v$.email.$error) }" />
                            <div class="form-message animated">
                                <span class="validate-msg" v-if="v$.email.$error">
                                    {{ v$.email.$errors[0].$message }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-line margin-bottom-30">
                        <label for="message" class="sr-only"></label>
                        <textarea class="input validate" id="message" name="message" placeholder="Message" rows="10"
                            v-model="state.message"
                            :class="{ 'notvalid': (v$.message.$error) }"> {{ saveData }} </textarea>
                        <div class="form-message animated">

                            <span class="validate-msg" v-if="v$.message.$error">
                                {{ v$.message.$errors[0].$message }}
                            </span>
                        </div>
                    </div>
                    <div v-if="!logged_in">
                        <div class="form-line">
                            <label class="checkbox-container">Also create an account for me.
                                <input type="checkbox" v-model="create_acc" id="create_acc" name="create_acc" />
                                <span class="checkmark mdi mdi-checkbox-blank-outline"></span>
                            </label>
                            <div class="custom-tooltip">
                                <span class="information mdi mdi-information"></span>
                                <span class="tooltiptext">You will need an account to access SDK download section and
                                    trial/production license generators</span>
                            </div>
                        </div>
                        <div class="form-line">
                            <label class="checkbox-container">
                                <input type="checkbox" v-model="create_license" id="create_license"
                                    name="create_license" :disabled="!create_acc" />
                                <span class="checkbox-container__text">Create a trial license for the platforms I'm
                                    interested
                                    in.</span>
                                <span class="checkmark mdi mdi-checkbox-blank-outline"></span>
                            </label>
                        </div>
                        <div class="slider" :class="{ 'closed': !create_acc }">
                            <transition-group tag="fieldset" id="register-element" class="rel" name="register-element"
                                style="--total: 4">
                                <div class="width-100percent form-line margin-bottom-30 " key="register1" style="--i: 1"
                                    v-if="create_acc">
                                    <label for="country" class="sr-only"></label>
                                    <vue-select name="country" id="country" class=" " v-model="state.country"
                                        placeholder="Country" :options="support_countries" :close-on-select="true"
                                        :searchable="true" :clear-on-select="true"
                                        :class="{ 'notvalid': (v$.country.$error) }"></vue-select>

                                    <div class="form-message animated">
                                        <span class="validate-msg" v-if="v$.country.$error">
                                            {{ v$.country.$errors[0].$message }}
                                        </span>
                                    </div>
                                </div>
                                <div class="form-line margin-bottom-30" key="register2" style="--i: 1"
                                    v-if="create_acc">
                                    <label for="company" class="sr-only"></label>
                                    <input type="text" name="company" id="company" class="input validate"
                                        v-model="company" placeholder="Company" autocomplete="off" />
                                </div>
                                <div class="form-line margin-bottom-30" key="register5" style="--i: 2"
                                    v-if="create_acc">
                                    <label for="password" class="sr-only"></label>
                                    <input type="password" name="password" id="password" class="input validate"
                                        v-model="state.password.password" placeholder="Password" autocomplete="off"
                                        :class="{ 'notvalid': (v$.password.password.$error) }" />
                                    <div class="form-message animated">
                                        <span class="validate-msg" v-if="v$.password.password.$error">
                                            {{ v$.password.password.$errors[0].$message }}
                                        </span>
                                    </div>
                                </div>
                                <div class="form-line margin-bottom-30" key="register3" style="--i: 3"
                                    v-if="create_acc">
                                    <label for="confirm_password" class="sr-only"></label>
                                    <input type="password" name="confirm_password" id="confirm_password"
                                        class="input validate" v-model="state.password.confirm_password"
                                        placeholder="Confirm Password" autocomplete="off"
                                        :class="{ 'notvalid': (v$.password.confirm_password.$error) }" />
                                    <div class="form-message animated">
                                        <span class="validate-msg" v-if="v$.password.confirm_password.$error">
                                            {{ v$.password.confirm_password.$errors[0].$message }}
                                        </span>
                                    </div>
                                </div>
                                <div class="form-line margin-bottom-30" key="register4" style="--i: 1"
                                    v-if="create_acc && create_license">
                                    <label for="app_name" class="sr-only"></label>
                                    <input type="app_name" name="app_name" id="app_name" class="input validate"
                                        v-model="state.app_name" placeholder="bundle ID" autocomplete="off"
                                        :class="{ 'notvalid': (v$.app_name.$error) }" />

                                    <div class="form-message animated">
                                        <span class="validate-msg" v-if="v$.app_name.$error">
                                            {{ v$.app_name.$errors[0].$message }}
                                        </span>
                                    </div>
                                    <p class="info">A bundle ID or bundle identifier uniquely identifies an application
                                        in
                                        Apple's ecosystem. This means that no two applications can have the same bundle
                                        identifier. (Ex: com.barcodescanner.free)</p>
                                </div>
                            </transition-group>
                        </div>
                    </div>
                    <div class="form-line form-center text-center">
                        <a type="submit" class="button form-button large" @click.prevent="submitForm">Submit</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mdi-checkbox-blank-outline::before {
    content: "\F0131" !important;
}
</style>
