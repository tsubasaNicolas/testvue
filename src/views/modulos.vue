<template>
<div>
    <h1>Modulos</h1>

    <b-container>

        <router-link :to="{name: 'modulos', params: {id :item} }" :key="index" v-for="(item, index) of valores">

            <b-row>
                <b-col sm="12" md="6" lg="4" xl="3" class="mb-1">

                    <b-card bg-variant="primary" text-variant="white" header="MODULO" class="text-center">
                        <b-card-text>{{item}}
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>

        </router-link>

    </b-container>

    <Modulo />

</div>
</template>

<script>
import Modulo from '@/components/Modulo.vue';

export default {
    name: 'modulos',
    components: {
        Modulo
    },
    data() {
        return {
            valores: [1, 2, 3]
        }
    }
}
</script>
