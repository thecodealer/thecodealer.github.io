<template>
    <div class="profile-intro row">
        <div class="col-md-4 profile-col">
            <div class="profile-pic">
                <div class="profile-border">
                    <img src="@/assets/img/avatar.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <h1 class="intro-title1">Hi, i'm <span class="color1 bold">{{ name }}</span></h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    inject: ['$config'],
    computed: {
        profile() {
            return this.$config.profile || {}
        },
        name() {
            return this.profile.full_name || ''
        },
    }
}
</script>