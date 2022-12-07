<script>
import { ref } from 'vue'
import QuoteWrapper from './QuoteWrapper.vue';
export default {

    components: {
        QuoteWrapper,
    },
    setup() {

        const technologies = [
            { id: 1, name: 'iOS', svgName: 'iOS', width: 62, height: 29, selected_barcodes: [] },
            { id: 2, name: 'Android', svgName: 'android', width: 116, height: 26, selected_barcodes: [] },
            { id: 3, name: 'Cordova', svgName: 'cordova', width: 99, height: 26, selected_barcodes: [] },
            { id: 4, name: 'Ionic', svgName: 'ionic', width: 92, height: 31, selected_barcodes: [] },
            { id: 5, name: 'Xamarin', svgName: 'xamarin', width: 98, height: 31, selected_barcodes: [] },
            { id: 6, name: 'React', svgName: 'react', width: 101, height: 31, selected_barcodes: [] },
        ];

        const barcodes = [
            { short: 'codabar', display: 'Codabar' },
            { short: 'code11', display: 'Code11' },
            { short: 'code39', display: 'Code39' },
            { short: 'code93', display: 'Code93' },
            { short: 'code128', display: 'Code128' },
            { short: 'eanUpcCode', display: 'EAN/UPC' },
            { short: 'msiPlesey', display: 'Msi Plesey' },
            { short: 'qrCode', display: 'QR Code' },
            { short: 'pdf417', display: 'PDF417' },
            { short: 'aztec', display: 'Aztec Code' },
        ];

        return {

            technologies, barcodes
        }
    },


}

</script>

<template>
    <QuoteWrapper :barcodes="barcodes" :tech="technologies"></QuoteWrapper>
</template>

<style scoped>

</style>
