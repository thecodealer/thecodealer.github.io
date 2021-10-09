<template>
    <template v-if="items.length">
        <TimelineItem title="Profile" class="profile-infos" :items="items" />
    </template>
</template>

<script>
import TimelineItem from './TimelineItem'

export default {
    name: 'Profile',
    inject: ['$config'],
    components: {
        TimelineItem
    },
    computed: {
        items() {
            const output = []
            if (this.$config.profile) {
                if (this.$config.profile.full_name) {
                    output.push({title: 'Full Name', content: this.$config.profile.full_name})
                }
                if (this.$config.profile.location) {
                    output.push({title: 'Location', content: this.$config.profile.location})
                }
                if (this.$config.profile.email) {
                    output.push({title: 'Email', content: this.$config.profile.email})
                }
                if (this.$config.profile.phone_number) {
                    output.push({title: 'Phone Number', content: this.$config.profile.phone_number})
                }
                if (this.$config.profile.career_objectives) {
                    output.push({title: 'Career Objectives', content: this.$config.profile.career_objectives})
                }
                if (this.$config.profile.personal_statement) {
                    output.push({title: 'Personal Statement', content: this.$config.profile.personal_statement})
                }
            }
            return output
        }
    }
}
</script>