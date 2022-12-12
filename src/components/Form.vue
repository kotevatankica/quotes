<script>
import { ref, reactive, computed, toHandlers } from 'vue';
import useValidate from '@vuelidate/core'
import { required, minLength, email, sameAs, helpers } from '@vuelidate/validators'
import VueNextSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'
import CountryFlag from 'vue-country-flag-next'

export default {
    components: {
        'vue-select': VueNextSelect,
        CountryFlag,
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
        const search_country = ref(null);
        const support_countries = [
            {
            flag2: 'af',
            flag: 'afg',
            name: 'Afghanistan'
        },
        {
            flag2: 'ax',
            flag: 'ala',
            name: 'Åland Islands'
        },
        {
            flag2: 'al',
            flag: 'alb',
            name: 'Albania'
        },
        {
            flag2: 'dz',
            flag: 'dza',
            name: 'Algeria'
        },
        {
            flag2: 'as',
            flag: 'asm',
            name: 'American Samoa'
        },
        {
            flag2: 'ad',
            flag: 'and',
            name: 'Andorra'
        },
        {
            flag2: 'ao',
            flag: 'ago',
            name: 'Angola'
        },
        {
            flag2: 'ai',
            flag: 'aia',
            name: 'Anguilla'
        },
        {
            flag2: 'aq',
            flag: 'ata',
            name: 'Antarctica'
        },
        {
            flag2: 'ag',
            flag: 'atg',
            name: 'Antigua and Barbuda'
        },
        {
            flag2: 'ar',
            flag: 'arg',
            name: 'Argentina'
        },
        {
            flag2: 'am',
            flag: 'arm',
            name: 'Armenia'
        },
        {
            flag2: 'aw',
            flag: 'abw',
            name: 'Aruba'
        },
        {
            flag2: 'au',
            flag: 'aus',
            name: 'Australia'
        },
        {
            flag2: 'at',
            flag: 'aut',
            name: 'Austria'
        },
        {
            flag2: 'az',
            flag: 'aze',
            name: 'Azerbaijan'
        },
        {
            flag2: 'bs',
            flag: 'bhs',
            name: 'Bahamas'
        },
        {
            flag2: 'bh',
            flag: 'bhr',
            name: 'Bahrain'
        },
        {
            flag2: 'bd',
            flag: 'bgd',
            name: 'Bangladesh'
        },
        {
            flag2: 'bb',
            flag: 'brb',
            name: 'Barbados'
        },
        {
            flag2: 'by',
            flag: 'blr',
            name: 'Belarus'
        },
        {
            flag2: 'be',
            flag: 'bel',
            name: 'Belgium'
        },
        {
            flag2: 'bz',
            flag: 'blz',
            name: 'Belize'
        },
        {
            flag2: 'bj',
            flag: 'ben',
            name: 'Benin'
        },
        {
            flag2: 'bm',
            flag: 'bmu',
            name: 'Bermuda'
        },
        {
            flag2: 'bt',
            flag: 'btn',
            name: 'Bhutan'
        },
        {
            flag2: 'bo',
            flag: 'bol',
            name: 'Bolivia (Plurinational State of)'
        },
        {
            flag2: 'bq',
            flag: 'bes',
            name: 'Bonaire, Sint Eustatius and Saba'
        },
        {
            flag2: 'ba',
            flag: 'bih',
            name: 'Bosnia and Herzegovina'
        },
        {
            flag2: 'bw',
            flag: 'bwa',
            name: 'Botswana'
        },
        {
            flag2: 'bv',
            flag: 'bvt',
            name: 'Bouvet Island'
        },
        {
            flag2: 'br',
            flag: 'bra',
            name: 'Brazil'
        },
        {
            flag2: 'vg',
            flag: 'vgb',
            name: 'Virgin Islands (British)'
        },
        {
            flag2: 'io',
            flag: 'iot',
            name: 'British Indian Ocean Territory'
        },
        {
            flag2: 'bn',
            flag: 'brn',
            name: 'Brunei Darussalam'
        },
        {
            flag2: 'bg',
            flag: 'bgr',
            name: 'Bulgaria'
        },
        {
            flag2: 'bf',
            flag: 'bfa',
            name: 'Burkina Faso'
        },
        {
            flag2: 'bi',
            flag: 'bdi',
            name: 'Burundi'
        },
        {
            flag2: 'kh',
            flag: 'khm',
            name: 'Cambodia'
        },
        {
            flag2: 'cm',
            flag: 'cmr',
            name: 'Cameroon'
        },
        {
            flag2: 'ca',
            flag: 'can',
            name: 'Canada'
        },
        {
            flag2: 'cv',
            flag: 'cpv',
            name: 'Cabo Verde'
        },
        {
            flag2: 'ky',
            flag: 'cym',
            name: 'Cayman Islands'
        },
        {
            flag2: 'cf',
            flag: 'caf',
            name: 'Central African Republic'
        },
        {
            flag2: 'td',
            flag: 'tcd',
            name: 'Chad'
        },
        {
            flag2: 'cl',
            flag: 'chl',
            name: 'Chile'
        },
        {
            flag2: 'cn',
            flag: 'chn',
            name: 'China'
        },
        {
            flag2: 'hk',
            flag: 'hkg',
            name: 'Hong Kong'
        },
        {
            flag2: 'mo',
            flag: 'mac',
            name: 'Macao'
        },
        {
            flag2: 'cx',
            flag: 'cxr',
            name: 'Christmas Island'
        },
        {
            flag2: 'cc',
            flag: 'cck',
            name: 'Cocos (Keeling) Islands'
        },
        {
            flag2: 'co',
            flag: 'col',
            name: 'Colombia'
        },
        {
            flag2: 'km',
            flag: 'com',
            name: 'Comoros'
        },
        {
            flag2: 'cg',
            flag: 'cog',
            name: 'Congo'
        },
        {
            flag2: 'cd',
            flag: 'cod',
            name: 'Congo, Democratic Republic of the'
        },
        {
            flag2: 'ck',
            flag: 'cok',
            name: 'Cook Islands'
        },
        {
            flag2: 'cr',
            flag: 'cri',
            name: 'Costa Rica'
        },
        {
            flag2: 'ci',
            flag: 'civ',
            name: 'Côte d\'Ivoire'
        },
        {
            flag2: 'hr',
            flag: 'hrv',
            name: 'Croatia'
        },
        {
            flag2: 'cu',
            flag: 'cub',
            name: 'Cuba'
        },
        {
            flag2: 'cw',
            flag: 'cuw',
            name: 'Curaçao'
        },
        {
            flag2: 'cy',
            flag: 'cyp',
            name: 'Cyprus'
        },
        {
            flag2: 'cz',
            flag: 'cze',
            name: 'Czechia'
        },
        {
            flag2: 'dk',
            flag: 'dnk',
            name: 'Denmark'
        },
        {
            flag2: 'dj',
            flag: 'dji',
            name: 'Djibouti'
        },
        {
            flag2: 'dm',
            flag: 'dma',
            name: 'Dominica'
        },
        {
            flag2: 'do',
            flag: 'dom',
            name: 'Dominican Republic'
        },
        {
            flag2: 'ec',
            flag: 'ecu',
            name: 'Ecuador'
        },
        {
            flag2: 'eg',
            flag: 'egy',
            name: 'Egypt'
        },
        {
            flag2: 'sv',
            flag: 'slv',
            name: 'El Salvador'
        },
        {
            flag2: 'gq',
            flag: 'gnq',
            name: 'Equatorial Guinea'
        },
        {
            flag2: 'er',
            flag: 'eri',
            name: 'Eritrea'
        },
        {
            flag2: 'ee',
            flag: 'est',
            name: 'Estonia'
        },
        {
            flag2: 'et',
            flag: 'eth',
            name: 'Ethiopia'
        },
        {
            flag2: 'fk',
            flag: 'flk',
            name: 'Falkland Islands (Malvinas)'
        },
        {
            flag2: 'fo',
            flag: 'fro',
            name: 'Faroe Islands'
        },
        {
            flag2: 'fj',
            flag: 'fji',
            name: 'Fiji'
        },
        {
            flag2: 'fi',
            flag: 'fin',
            name: 'Finland'
        },
        {
            flag2: 'fr',
            flag: 'fra',
            name: 'France'
        },
        {
            flag2: 'gf',
            flag: 'guf',
            name: 'French Guiana'
        },
        {
            flag2: 'pf',
            flag: 'pyf',
            name: 'French Polynesia'
        },
        {
            flag2: 'tf',
            flag: 'atf',
            name: 'French Southern Territories'
        },
        {
            flag2: 'ga',
            flag: 'gab',
            name: 'Gabon'
        },
        {
            flag2: 'gm',
            flag: 'gmb',
            name: 'Gambia'
        },
        {
            flag2: 'ge',
            flag: 'geo',
            name: 'Georgia'
        },
        {
            flag2: 'de',
            flag: 'deu',
            name: 'Germany'
        },
        {
            flag2: 'gh',
            flag: 'gha',
            name: 'Ghana'
        },
        {
            flag2: 'gi',
            flag: 'gib',
            name: 'Gibraltar'
        },
        {
            flag2: 'gr',
            flag: 'grc',
            name: 'Greece'
        },
        {
            flag2: 'gl',
            flag: 'grl',
            name: 'Greenland'
        },
        {
            flag2: 'gd',
            flag: 'grd',
            name: 'Grenada'
        },
        {
            flag2: 'gp',
            flag: 'glp',
            name: 'Guadeloupe'
        },
        {
            flag2: 'gu',
            flag: 'gum',
            name: 'Guam'
        },
        {
            flag2: 'gt',
            flag: 'gtm',
            name: 'Guatemala'
        },
        {
            flag2: 'gg',
            flag: 'ggy',
            name: 'Guernsey'
        },
        {
            flag2: 'gn',
            flag: 'gin',
            name: 'Guinea'
        },
        {
            flag2: 'gw',
            flag: 'gnb',
            name: 'Guinea-Bissau'
        },
        {
            flag2: 'gy',
            flag: 'guy',
            name: 'Guyana'
        },
        {
            flag2: 'ht',
            flag: 'hti',
            name: 'Haiti'
        },
        {
            flag2: 'hm',
            flag: 'hmd',
            name: 'Heard Island and McDonald Islands'
        },
        {
            flag2: 'va',
            flag: 'vat',
            name: 'Holy See'
        },
        {
            flag2: 'hn',
            flag: 'hnd',
            name: 'Honduras'
        },
        {
            flag2: 'hu',
            flag: 'hun',
            name: 'Hungary'
        },
        {
            flag2: 'is',
            flag: 'isl',
            name: 'Iceland'
        },
        {
            flag2: 'in',
            flag: 'ind',
            name: 'India'
        },
        {
            flag2: 'id',
            flag: 'idn',
            name: 'Indonesia'
        },
        {
            flag2: 'ir',
            flag: 'irn',
            name: 'Iran (Islamic Republic of)'
        },
        {
            flag2: 'iq',
            flag: 'irq',
            name: 'Iraq'
        },
        {
            flag2: 'ie',
            flag: 'irl',
            name: 'Ireland'
        },
        {
            flag2: 'im',
            flag: 'imn',
            name: 'Isle of Man'
        },
        {
            flag2: 'il',
            flag: 'isr',
            name: 'Israel'
        },
        {
            flag2: 'it',
            flag: 'ita',
            name: 'Italy'
        },
        {
            flag2: 'jm',
            flag: 'jam',
            name: 'Jamaica'
        },
        {
            flag2: 'jp',
            flag: 'jpn',
            name: 'Japan'
        },
        {
            flag2: 'je',
            flag: 'jey',
            name: 'Jersey'
        },
        {
            flag2: 'jo',
            flag: 'jor',
            name: 'Jordan'
        },
        {
            flag2: 'kz',
            flag: 'kaz',
            name: 'Kazakhstan'
        },
        {
            flag2: 'ke',
            flag: 'ken',
            name: 'Kenya'
        },
        {
            flag2: 'ki',
            flag: 'kir',
            name: 'Kiribati'
        },
        {
            flag2: 'kp',
            flag: 'prk',
            name: 'Korea (Democratic People\'s Republic of)'
        },
        {
            flag2: 'kr',
            flag: 'kor',
            name: 'Korea, Republic of'
        },
        {
            flag2: 'kw',
            flag: 'kwt',
            name: 'Kuwait'
        },
        {
            flag2: 'kg',
            flag: 'kgz',
            name: 'Kyrgyzstan'
        },
        {
            flag2: 'la',
            flag: 'lao',
            name: 'Lao People\'s Democratic Republic'
        },
        {
            flag2: 'lv',
            flag: 'lva',
            name: 'Latvia'
        },
        {
            flag2: 'lb',
            flag: 'lbn',
            name: 'Lebanon'
        },
        {
            flag2: 'ls',
            flag: 'lso',
            name: 'Lesotho'
        },
        {
            flag2: 'lr',
            flag: 'lbr',
            name: 'Liberia'
        },
        {
            flag2: 'ly',
            flag: 'lby',
            name: 'Libya'
        },
        {
            flag2: 'li',
            flag: 'lie',
            name: 'Liechtenstein'
        },
        {
            flag2: 'lt',
            flag: 'ltu',
            name: 'Lithuania'
        },
        {
            flag2: 'lu',
            flag: 'lux',
            name: 'Luxembourg'
        },
        {
            flag2: 'mk',
            flag: 'mkd',
            name: 'North Macedonia'
        },
        {
            flag2: 'mg',
            flag: 'mdg',
            name: 'Madagascar'
        },
        {
            flag2: 'mw',
            flag: 'mwi',
            name: 'Malawi'
        },
        {
            flag2: 'my',
            flag: 'mys',
            name: 'Malaysia'
        },
        {
            flag2: 'mv',
            flag: 'mdv',
            name: 'Maldives'
        },
        {
            flag2: 'ml',
            flag: 'mli',
            name: 'Mali'
        },
        {
            flag2: 'mt',
            flag: 'mlt',
            name: 'Malta'
        },
        {
            flag2: 'mh',
            flag: 'mhl',
            name: 'Marshall Islands'
        },
        {
            flag2: 'mq',
            flag: 'mtq',
            name: 'Martinique'
        },
        {
            flag2: 'mr',
            flag: 'mrt',
            name: 'Mauritania'
        },
        {
            flag2: 'mu',
            flag: 'mus',
            name: 'Mauritius'
        },
        {
            flag2: 'yt',
            flag: 'myt',
            name: 'Mayotte'
        },
        {
            flag2: 'mx',
            flag: 'mex',
            name: 'Mexico'
        },
        {
            flag2: 'fm',
            flag: 'fsm',
            name: 'Micronesia (Federated States of)'
        },
        {
            flag2: 'md',
            flag: 'mda',
            name: 'Moldova, Republic of'
        },
        {
            flag2: 'mc',
            flag: 'mco',
            name: 'Monaco'
        },
        {
            flag2: 'mn',
            flag: 'mng',
            name: 'Mongolia'
        },
        {
            flag2: 'me',
            flag: 'mne',
            name: 'Montenegro'
        },
        {
            flag2: 'ms',
            flag: 'msr',
            name: 'Montserrat'
        },
        {
            flag2: 'ma',
            flag: 'mar',
            name: 'Morocco'
        },
        {
            flag2: 'mz',
            flag: 'moz',
            name: 'Mozambique'
        },
        {
            flag2: 'mm',
            flag: 'mmr',
            name: 'Myanmar'
        },
        {
            flag2: 'na',
            flag: 'nam',
            name: 'Namibia'
        },
        {
            flag2: 'nr',
            flag: 'nru',
            name: 'Nauru'
        },
        {
            flag2: 'np',
            flag: 'npl',
            name: 'Nepal'
        },
        {
            flag2: 'nl',
            flag: 'nld',
            name: 'Netherlands'
        },
        {
            flag2: 'nc',
            flag: 'ncl',
            name: 'New Caledonia'
        },
        {
            flag2: 'nz',
            flag: 'nzl',
            name: 'New Zealand'
        },
        {
            flag2: 'ni',
            flag: 'nic',
            name: 'Nicaragua'
        },
        {
            flag2: 'ne',
            flag: 'ner',
            name: 'Niger'
        },
        {
            flag2: 'ng',
            flag: 'nga',
            name: 'Nigeria'
        },
        {
            flag2: 'nu',
            flag: 'niu',
            name: 'Niue'
        },
        {
            flag2: 'nf',
            flag: 'nfk',
            name: 'Norfolk Island'
        },
        {
            flag2: 'mp',
            flag: 'mnp',
            name: 'Northern Mariana Islands'
        },
        {
            flag2: 'no',
            flag: 'nor',
            name: 'Norway'
        },
        {
            flag2: 'om',
            flag: 'omn',
            name: 'Oman'
        },
        {
            flag2: 'pk',
            flag: 'pak',
            name: 'Pakistan'
        },
        {
            flag2: 'pw',
            flag: 'plw',
            name: 'Palau'
        },
        {
            flag2: 'ps',
            flag: 'pse',
            name: 'Palestine, State of'
        },
        {
            flag2: 'pa',
            flag: 'pan',
            name: 'Panama'
        },
        {
            flag2: 'pg',
            flag: 'png',
            name: 'Papua New Guinea'
        },
        {
            flag2: 'py',
            flag: 'pry',
            name: 'Paraguay'
        },
        {
            flag2: 'pe',
            flag: 'per',
            name: 'Peru'
        },
        {
            flag2: 'ph',
            flag: 'phl',
            name: 'Philippines'
        },
        {
            flag2: 'pn',
            flag: 'pcn',
            name: 'Pitcairn'
        },
        {
            flag2: 'pl',
            flag: 'pol',
            name: 'Poland'
        },
        {
            flag2: 'pt',
            flag: 'prt',
            name: 'Portugal'
        },
        {
            flag2: 'pr',
            flag: 'pri',
            name: 'Puerto Rico'
        },
        {
            flag2: 'qa',
            flag: 'qat',
            name: 'Qatar'
        },
        {
            flag2: 're',
            flag: 'reu',
            name: 'Réunion'
        },
        {
            flag2: 'ro',
            flag: 'rou',
            name: 'Romania'
        },
        {
            flag2: 'ru',
            flag: 'rus',
            name: 'Russian Federation'
        },
        {
            flag2: 'rw',
            flag: 'rwa',
            name: 'Rwanda'
        },
        {
            flag2: 'bl',
            flag: 'blm',
            name: 'Saint Barthélemy'
        },
        {
            flag2: 'sh',
            flag: 'shn',
            name: 'Saint Helena, Ascension and Tristan da Cunha'
        },
        {
            flag2: 'kn',
            flag: 'kna',
            name: 'Saint Kitts and Nevis'
        },
        {
            flag2: 'lc',
            flag: 'lca',
            name: 'Saint Lucia'
        },
        {
            flag2: 'mf',
            flag: 'maf',
            name: 'Saint Martin (French part)'
        },
        {
            flag2: 'pm',
            flag: 'spm',
            name: 'Saint Pierre and Miquelon'
        },
        {
            flag2: 'vc',
            flag: 'vct',
            name: 'Saint Vincent and the Grenadines'
        },
        {
            flag2: 'ws',
            flag: 'wsm',
            name: 'Samoa'
        },
        {
            flag2: 'sm',
            flag: 'smr',
            name: 'San Marino'
        },
        {
            flag2: 'st',
            flag: 'stp',
            name: 'Sao Tome and Principe'
        },
        {
            flag2: 'sa',
            flag: 'sau',
            name: 'Saudi Arabia'
        },
        {
            flag2: 'sn',
            flag: 'sen',
            name: 'Senegal'
        },
        {
            flag2: 'rs',
            flag: 'srb',
            name: 'Serbia'
        },
        {
            flag2: 'sc',
            flag: 'syc',
            name: 'Seychelles'
        },
        {
            flag2: 'sl',
            flag: 'sle',
            name: 'Sierra Leone'
        },
        {
            flag2: 'sg',
            flag: 'sgp',
            name: 'Singapore'
        },
        {
            flag2: 'sx',
            flag: 'sxm',
            name: 'Sint Maarten (Dutch part)'
        },
        {
            flag2: 'sk',
            flag: 'svk',
            name: 'Slovakia'
        },
        {
            flag2: 'si',
            flag: 'svn',
            name: 'Slovenia'
        },
        {
            flag2: 'sb',
            flag: 'slb',
            name: 'Solomon Islands'
        },
        {
            flag2: 'so',
            flag: 'som',
            name: 'Somalia'
        },
        {
            flag2: 'za',
            flag: 'zaf',
            name: 'South Africa'
        },
        {
            flag2: 'gs',
            flag: 'sgs',
            name: 'South Georgia and the South Sandwich Islands'
        },
        {
            flag2: 'ss',
            flag: 'ssd',
            name: 'South Sudan'
        },
        {
            flag2: 'su',
            flag: 'sun',
            name: 'Soviet Union'
        },
        {
            flag2: 'es',
            flag: 'esp',
            name: 'Spain'
        },
        {
            flag2: 'lk',
            flag: 'lka',
            name: 'Sri Lanka'
        },
        {
            flag2: 'sd',
            flag: 'sdn',
            name: 'Sudan'
        },
        {
            flag2: 'sr',
            flag: 'sur',
            name: 'Suriname'
        },
        {
            flag2: 'sj',
            flag: 'sjm',
            name: 'Svalbard and Jan Mayen'
        },
        {
            flag2: 'sz',
            flag: 'swz',
            name: 'Eswatini'
        },
        {
            flag2: 'se',
            flag: 'swe',
            name: 'Sweden'
        },
        {
            flag2: 'ch',
            flag: 'che',
            name: 'Switzerland'
        },
        {
            flag2: 'sy',
            flag: 'syr',
            name: 'Syrian Arab Republic'
        },
        {
            flag2: 'tw',
            flag: 'twn',
            name: 'Taiwan, Province of China'
        },
        {
            flag2: 'tj',
            flag: 'tjk',
            name: 'Tajikistan'
        },
        {
            flag2: 'tz',
            flag: 'tza',
            name: 'Tanzania, United Republic of'
        },
        {
            flag2: 'th',
            flag: 'tha',
            name: 'Thailand'
        },
        {
            flag2: 'tl',
            flag: 'tls',
            name: 'Timor-Leste'
        },
        {
            flag2: 'tg',
            flag: 'tgo',
            name: 'Togo'
        },
        {
            flag2: 'tk',
            flag: 'tkl',
            name: 'Tokelau'
        },
        {
            flag2: 'to',
            flag: 'ton',
            name: 'Tonga'
        },
        {
            flag2: 'tt',
            flag: 'tto',
            name: 'Trinidad and Tobago'
        },
        {
            flag2: 'tn',
            flag: 'tun',
            name: 'Tunisia'
        },
        {
            flag2: 'tr',
            flag: 'tur',
            name: 'Turkey'
        },
        {
            flag2: 'tm',
            flag: 'tkm',
            name: 'Turkmenistan'
        },
        {
            flag2: 'tc',
            flag: 'tca',
            name: 'Turks and Caicos Islands'
        },
        {
            flag2: 'tv',
            flag: 'tuv',
            name: 'Tuvalu'
        },
        {
            flag2: 'ug',
            flag: 'uga',
            name: 'Uganda'
        },
        {
            flag2: 'ua',
            flag: 'ukr',
            name: 'Ukraine'
        },
        {
            flag2: 'ae',
            flag: 'are',
            name: 'United Arab Emirates'
        },
        {
            flag2: 'gb',
            flag: 'gbr',
            name: 'United Kingdom of Great Britain and Northern Ireland'
        },
        {
            flag2: 'us',
            flag: 'usa',
            name: 'United States of America'
        },
        {
            flag2: 'um',
            flag: 'umi',
            name: 'United States Minor Outlying Islands'
        },
        {
            flag2: 'uy',
            flag: 'ury',
            name: 'Uruguay'
        },
        {
            flag2: 'uz',
            flag: 'uzb',
            name: 'Uzbekistan'
        },
        {
            flag2: 'vu',
            flag: 'vut',
            name: 'Vanuatu'
        },
        {
            flag2: 've',
            flag: 'ven',
            name: 'Venezuela (Bolivarian Republic of)'
        },
        {
            flag2: 'vn',
            flag: 'vnm',
            name: 'Viet Nam'
        },
        {
            flag2: 'vi',
            flag: 'vir',
            name: 'Virgin Islands (U.S.)'
        },
        {
            flag2: 'wf',
            flag: 'wlf',
            name: 'Wallis and Futuna'
        },
        {
            flag2: 'eh',
            flag: 'esh',
            name: 'Western Sahara'
        },
        {
            flag2: 'ye',
            flag: 'yem',
            name: 'Yemen'
        },
        {
            flag2: 'zm',
            flag: 'zmb',
            name: 'Zambia'
        },
        {
            flag2: 'zw',
            flag: 'zwe',
            name: 'Zimbabwe'
        }];

        return {

            state, v$, create_acc, create_license, support_countries, company, msg, search_country,
        }
    },
    computed: {
        saveData() {

            this.state.message = 'I am interested in the following technologies:\n----------------------------------------\n\n';
            var listBarcodes = '';
            var tech = '';
            var mess = 'I am interested in the following technologie:\n\n';

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
        search_By_country() {


            if (this.search_country) {
                let self = this;
                filtered = this.support_countries.name.filter((country) => {
                    var re = self.search_country;
                    if (country.name.toLowerCase().match(re))
                        return true;
                });
            }
        }


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
                                    :class="{ 'notvalid': (v$.first_name.$error), 'valid': !(v$.first_name.$error) && state.first_name }" />
                                <div class="form-message animated" v-if="v$.first_name.$error">
                                    <span class="validate-msg">
                                        {{ v$.first_name.$errors[0].$message }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 margin-bottom-30">
                            <div class="form-line">
                                <label for="last-name" class="sr-only"></label>
                                <input class="input validate " type="text" id="last-name" name="last_name"
                                    v-model="state.last_name" placeholder="Last Name" :class="{
                                        'notvalid': (v$.last_name.$error),
                                        'valid': !(v$.last_name.$error) && state.last_name
                                    }" />
                                <div class="form-message animated" v-if="v$.last_name.$error">
                                    <span class="validate-msg">
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
                                placeholder="E-mail"
                                :class="{ 'notvalid': (v$.email.$error), 'valid': !(v$.email.$error) && state.email }" />
                            <div class="form-message animated" v-if="v$.email.$error">
                                <span class="validate-msg">
                                    {{ v$.email.$errors[0].$message }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-line margin-bottom-30">
                        <label for="message" class="sr-only"></label>
                        <textarea class="input validate" id="message" name="message" placeholder="Message" rows="10"
                            v-model="state.message"
                            :class="{ 'notvalid': (v$.message.$error), 'valid': !(v$.message.$error) && state.message }"
                            @click="saveData"> </textarea>
                        <div class="form-message animated" v-if="v$.message.$error">
                            <span class="validate-msg">
                                {{ v$.message.$errors[0].$message }}
                            </span>
                        </div>
                    </div>

                    <div v-if="!logged_in">
                        <div class="form-line">
                            <label class="checkbox-container">Also create an account for me.
                                <input type="checkbox" v-model="create_acc" id="create_acc" name="create_acc" />
                                <span
                                    :class="{ ' checkmark mdi mdi-outline-check-box ': create_acc === true, 'checkmark mdi mdi-checkbox-blank-outline': create_acc === false }">
                                </span>
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
                                <span
                                    :class="{ ' checkmark mdi mdi-outline-check-box ': create_license === true, 'checkmark mdi mdi-checkbox-blank-outline': create_license === false }"></span>
                            </label>
                        </div>
                        <div class="slider" :class="{ 'closed': !create_acc }">
                            <transition-group tag="fieldset" id="register-element" class="rel" name="register-element"
                                style="--total: 4">
                                <div class="width-100percent form-line margin-bottom-30 " key="register1" style="--i: 1"
                                    v-if="create_acc">
                                    <vue-select v-model="state.country" :options="support_countries" label-by="name"
                                        :close-on-select="true" :clear-on-select="true"
                                        :class="{ 'notvalid': (v$.country.$error), 'valid': !(v$.country.$error) && state.country }">
                                        <template #label="{ selected }">
                                            <template v-if="selected">
                                                <div>
                                                    <CountryFlag :country='selected.flag2' size='small' /> {{
                                                            selected.name
                                                    }}
                                                </div>

                                            </template>

                                        </template>
                                        <template #dropdown-item="{ option }">
                                            <div>
                                                <CountryFlag :country='option.flag2' /> {{ option.name }}
                                            </div>
                                        </template>
                                    </vue-select>

                                    <div class="form-message animated" v-if="v$.country.$error">
                                        <span class="validate-msg">
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
                                        :class="{ 'notvalid': (v$.password.password.$error), 'valid': !(v$.password.password.$error) && state.password.password }" />
                                    <div class="form-message animated" v-if="v$.password.password.$error">
                                        <span class="validate-msg">
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
                                        :class="{ 'notvalid': (v$.password.confirm_password.$error), 'valid': !(v$.password.confirm_password.$error) && state.password.confirm_password }" />
                                    <div class="form-message animated" v-if="v$.password.confirm_password.$error">
                                        <span class="validate-msg">
                                            {{ v$.password.confirm_password.$errors[0].$message }}
                                        </span>
                                    </div>
                                </div>
                                <div class="form-line margin-bottom-30" key="register4" style="--i: 1"
                                    v-if="create_acc && create_license">
                                    <label for="app_name" class="sr-only"></label>
                                    <input type="app_name" name="app_name" id="app_name" class="input validate"
                                        v-model="state.app_name" placeholder="bundle ID" autocomplete="off"
                                        :class="{ 'notvalid': (v$.app_name.$error) && create_license === true, 'valid': !(v$.app_name.$error) && state.app_name }" />
                                    <div class="form-message animated" v-if="v$.app_name.$error">
                                        <span class="validate-msg">
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

<style >
.vue-select[data-is-focusing=false][aria-disabled=false] .vue-input input,
input[readonly] {
    cursor: default;
    font-size: 1em !important;
}

.vue-select {
    border: 0px;
}

.vue-dropdown-item.selected.highlighted {

    background-color: #ff3347;
}

.vue-dropdown-item.highlighted {

    background-color: #3498db;
}
</style>
