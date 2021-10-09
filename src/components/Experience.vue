<template>
    <TimelineItem title="Professional Experience" :items="items" class="work-experience" />
</template>

<script>
import TimelineItem from './TimelineItem'

export default {
    name: 'Experience',
    inject: ['$config'],
    components: {
        TimelineItem
    },
    methods: {

    },
    computed: {
        items() {
            const output = []
            if (this.$config.experience) {
                this.$config.experience.forEach(item => {
                    let line1 = [item.company_name]
                    if (item.company_location) line1.push(`<span class="job-date">${item.company_location}</span>`)
                    if (item.company_website) line1.push(`<span class="job-date">${item.company_website}</span>`)
                    output.push({
                        title: item.job_title,
                        html: `<h4 class="job">${line1.join(' | ')}</h4>
                        <p class="text-muted">${item.period_from} - ${item.period_to || 'Current'}</p>
                        ${item.highlights && item.highlights.length ? `<ul class=""><li>${item.highlights.join('</li><li>')}</li></ul>` : ''}
                        ${item.stack && item.stack.length ? `<div class="stack-wrapper"><button class="btn btn-default">${item.stack.join('</button><button class="btn btn-default">')}</button></div>` : ''}
                        `
                    })
                })
            }
            return output
        }
    }
}
</script>