<template>
    <TimelineItem title="Education" :items="items" class="education" />
</template>

<script>
import TimelineItem from './TimelineItem'

export default {
    name: 'Education',
    inject: ['$config'],
    components: {
        TimelineItem
    },
    computed: {
        items() {
            const output = []
            if (this.$config.education) {
                this.$config.education.forEach(item => {
                    output.push({
                        title: item.programme,
                        html: `<h4 class="graduation-time">${item.school}</h4>
                        <p>${item.location}</p>
                        <p>${item.period}</p>
                        `
                    })
                })
            }
            return output
        }
    }
}
</script>