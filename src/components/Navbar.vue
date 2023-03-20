<template>
    <div class="flex flex-row justify-between p-4 sticky top-0 left-0 bg-gray-50 backdrop-blur-sm">
        <div><a href="#">DevelopedByMe</a></div>
        <div>
            <ul class="flex flex-row gap-x-4">
                <li><a href="#about" v-smooth-scroll>About</a></li>
                <li><a href="#contact" v-smooth-scroll>Contact</a></li>
                <li><a href="#address" v-smooth-scroll>Address</a></li>
                <li><a href="#footer" v-smooth-scroll>Footer</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav-bar'
}
</script>