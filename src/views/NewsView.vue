<script setup lang="ts">

import CreatePostForm from "@/components/centerArea/CreatePostForm.vue";
import {onMounted, ref} from "vue";
import {getRequest} from "@/api/getRequest";

const posts = ref([])
const getPosts = async () => {
  try {
    const response = await getRequest('/posts')
    console.log(response.data)
    return response.data.data
  } catch (e) {
    console.log(e.response.data)
  }
}
onMounted(async () => {
  posts.value = await getPosts()
})
</script>

<template>
  <CreatePostForm/>
  <div class="feed">
    <div       v-for="post in posts"
               :key="post.id" class="feedpost">
      <div class="logo"><img :src="post?.user?.id" alt="" width="45px" class="postlogo"></div>
      <div class="">
        <div class="name">
          <p>@{{ post?.user?.login }}</p>
          <div class="dots">
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <p v-html="post.content" class="dis"></p>
        <!--        <img src="../assets/images/post.jfif" alt="" class="postimg" width="100%">-->
        <div class="btns">
          <div class="line"><img src="@/assets/svg/share-arrow-svgrepo-com.svg" alt="" width="20px" height="25px">
            <p>125</p>
          </div>
          <div class="line"><img src="@/assets/svg/comment-multiple-svgrepo-com.svg" alt="" width="20px" height="20px">
            <p>459</p>
          </div>
          <div class="line"><img src="@/assets/svg/notLiked.svg" alt="" width="20px" height="20px">
            <p>10.9k</p>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <!-- post feeds -->
      <div class="feedpost">
        <div class="logo"><img src="../assets/images/postlogo.jpg" alt="" width="45px" class="postlogo"></div>
        <div class="">
          <div class="name">
            <h4>England Cricket</h4>
            <p>@englandcricket . 20h</p>
            <div class="dots">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <p class="dis">An amazing series to be involved in on our return to Pakistan after 17 years 🙌 One
            game to go...<br><br> <span class="hastage">#PAKvENG</span></p>
          <img src="../assets/images/post.jfif" alt="" class="postimg" width="100%">
          <div class="btns">
            <div class="line"><img src="@/assets/svg/share-arrow-svgrepo-com.svg" alt="" width="20px" height="25px">
              <p>125</p>
            </div>
            <div class="line"><img src="@/assets/svg/comment-multiple-svgrepo-com.svg" alt="" width="20px" height="20px">
              <p>459</p>
            </div>
            <div class="line"><img src="@/assets/svg/notLiked.svg" alt="" width="20px" height="20px">
              <p>10.9k</p>
            </div>
          </div>
        </div>
      </div>

      <!--  -->

      <div class="feedpost">
        <div class="logo"><img src="../assets/images/cricket.jpg" alt="" width="45px" class="postlogo"></div>
        <div class="">
          <div class="name">
            <h4>ESPNcricinfo</h4>
            <p>@ESPNcricinfo . 3h</p>
            <div class="dots">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <p class="dis">Always about the team 🙌 <br><br> <span class="hastage">#SAvIND</span></p>
          <video width="100%" controls>
            <source src="../assets/videos/H_z-DN7f_bvzGICO.mp4" type="video/mp4">
          </video>
          <div class="btns">
            <div class="line"><img src="@/assets/svg/share-arrow-svgrepo-com.svg" alt="" width="20px" height="25px">
              <p>9899</p>
            </div>
            <div class="line"><img src="@/assets/svg/comment-multiple-svgrepo-com.svg" alt="" width="20px" height="20px">
              <p>2459</p>
            </div>
            <div class="line"><img src="@/assets/svg/notLiked.svg" alt="" width="20px" height="20px">
              <p>100.9k</p>
            </div>
          </div>
        </div>
      </div>

      <!--  -->

      <div class="feedpost">
        <div class="logo"><img src="../assets/images/spacex.jpg" alt="" width="45px" class="postlogo"></div>
        <div class="">
          <div class="name">
            <h4>Space X</h4>
            <p>@SpaceX . 13h</p>
            <div class="dots">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <p class="dis"> Crew-5, SpaceX, and @NASA completed a full rehearsal of launch day activities</p>
          <img src="../assets/images/2post.jfif" alt="" class="postimg" width="100%">
          <div class="btns">
            <div class="line"><img src="@/assets/svg/share-arrow-svgrepo-com.svg" alt="" width="20px" height="25px">
              <p>125</p>
            </div>
            <div class="line"><img src="@/assets/svg/comment-multiple-svgrepo-com.svg" alt="" width="20px" height="20px">
              <p>459</p>
            </div>
            <div class="line"><img src="@/assets/svg/notLiked.svg" alt="" width="20px" height="20px">
              <p>10.9k</p>
            </div>
          </div>
        </div>
      </div>

      <!--  -->

      <div class="feedpost">
        <div class="logo"><img src="../assets/images/spacex.jpg" alt="" width="45px" class="postlogo"></div>
        <div class="">
          <div class="name">
            <h4>SpaceX</h4>
            <p>@SpaceX . 4h</p>
            <div class="dots">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <p class="dis">An amazing series to be involved in on our return to Pakistan after 17 years 🙌 One
            game to go...<br><br> <span class="hastage">#SpaceX</span></p>
          <img src="../assets/images/2post2.jfif" alt="" class="postimg" width="100%">
          <div class="btns">
            <div class="line"><img src="@/assets/svg/share-arrow-svgrepo-com.svg" alt="" width="20px" height="25px">
              <p>425</p>
            </div>
            <div class="line"><img src="@/assets/svg/comment-multiple-svgrepo-com.svg" alt="" width="20px" height="20px">
              <p>750</p>
            </div>
            <div class="line"><img src="@/assets/svg/notLiked.svg" alt="" width="20px" height="20px">
              <p>88.9k</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<style scoped>


.feedpost {
  display: flex;
  margin-top: 5%;
  border-bottom: 1px solid rgb(232, 232, 232);
  padding: 20px;
  cursor: pointer;
}

.feedpost:hover {
  background-color: rgb(19, 26, 26);
  transition: 0.2s;
}

.feedpost .logo {
  margin-right: 10px;
  border-radius: 100px;
}

.feedpost .name {
  display: flex;
  font-family: sans-serif;
  width: 100%;
  position: relative;
  padding-bottom: 10px;
}

.feedpost .name .dots {
  text-align: right;
  width: auto;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.feedpost .name h4 {
  padding-right: 10px;
  font-family: sans-serif;
}

.feedpost .name .dis {
  font-family: sans-serif;
  padding-top: 10px;
}

.postimg {
  margin-top: 20px;
  border-radius: 25px;
}

.feedpost .btns {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.feedpost .btns .line {
  display: flex;
  align-items: center;
}

.feedpost .btns .line p {
  font-family: sans-serif;
  font-size: 13px;
  padding-left: 8px;
  color: rgb(138, 137, 137);
}

.postlogo {
  border-radius: 50%;
}

video {
  border-radius: 25px;
  height: 312px;
  margin-top: 15px;
}

.hastage:hover {
  color: rgb(29, 155, 240);
  cursor: pointer;
  text-decoration: underline;
}

.hastage {
  color: rgb(29, 155, 240);
  cursor: pointer;
}


@media (max-width: 900px) {
  .feedpost .name {
    flex-direction: column;
  }
}
</style>