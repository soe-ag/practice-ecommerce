<script setup lang="ts">
import type { Vege, DummyProduct, ApiResponse } from "@/utils/type.ts";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const { data: products } = await useFetch<Product[]>("/api/products");

// const vegetables = ref<Vege[] | null>(null);

// / Fetch vegetables JSON correctly
// const { data: vegetables } = useFetch<Vege[]>("/json/vegetables.json");

const { data: fakeProducts } = await useFetch<ApiResponse>(
  "https://dummyjson.com/products"
);

let finalproducts: DummyProduct[] = [];
if (fakeProducts.value && Array.isArray(fakeProducts.value.products)) {
  finalproducts = fakeProducts.value.products.map((product: DummyProduct) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    rating: product.rating,
    image: product.images, // Assuming 'images' is an array
  }));
}

// Cart logic
const cart = ref<Product[]>([
  // {
  //   id: 1,
  //   name: "test item 1",
  //   price: 100,
  //   image: "",
  // },
  // {
  //   id: 1,
  //   name: "test item 1",
  //   price: 100,
  //   image: "",
  // },
  // {
  //   id: 1,
  //   name: "test item 1",
  //   price: 100,
  //   image: "",
  // },
  // {
  //   id: 1,
  //   name: "test item 1",
  //   price: 100,
  //   image: "",
  // },
]);
const addToCart = (product: Product) => {
  cart.value.push(product);
};

const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price, 0)
);

definePageMeta({
  title: "Home - MyShop",
  description: "Buy the best products online at MyShop.",
});
</script>

<template>
  <div class="w-100% m-auto p-4 bg-sub text-fontcolour">
    <!-- Hero Section -->
    <section class="text-center py-10">
      <h1 class="text-4xl font-bold">Welcome to the store!</h1>
      <p class="mt-2">Find the best products at unbeatable prices</p>
    </section>

    <div class="flex gap-2 justify-start">
      <!-- Product List -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 h-fit">
        <div
          v-for="product in products"
          :key="product.id"
          class="p-4 border-3px border-black rounded-lg shadow-md bg-secondary"
        >
          <NuxtImg
            :src="product.image"
            :alt="product.name"
            class="w-full h-40 object-cover rounded-md"
          />
          <h2 class="mt-2 text-lg font-semibold">
            {{ product.name }}
          </h2>
          <p class="">${{ product.price }}</p>
          <Button
            label="Add to Cart"
            class="mt-2 bg-sub rounded text-gray font-semibold"
            @click="addToCart(product)"
          />
        </div>
      </section>

      <!-- Cart Preview -->
      <section v-if="cart.length" class="p-4 border-t h-100 overflow-auto">
        <h3 class="text-xl font-semibold">Shopping Cart</h3>
        <ul class="mt-2">
          <li
            v-for="item in cart"
            :key="item.id"
            class="flex justify-between py-2"
          >
            <span>{{ item.name }}</span>
            <span>${{ item.price }}</span>
          </li>
        </ul>
        <p class="mt-2 font-bold">Total: ${{ totalPrice }}</p>
      </section>
    </div>
    <Divider />

    <div>
      <h3>Trending Products</h3>
      <div>trending products showing around 10 items - may be carousel</div>
      <!-- <div class="flex flex-wrap gap-2">
        <div
          v-for="item in vegetables"
          :key="item.id"
          class="w-40 shadow-md p-2 rounded-2 b-solid b-primary b-5"
        >
          <div>{{ item.name }}</div>
          <NuxtImg :src="item.photo_url" class="w-full" />
        </div>
      </div> -->
    </div>
    <Divider />

    <div>
      <h3>Best selling stores</h3>
      <div>best selling stores list (may be 5)</div>
    </div>
    <Divider />

    <div class="">
      <h3>Choose from types</h3>
      <div>List of types which can be chosen from</div>
      <div
        v-if="finalproducts?.length"
        class="flex flex-wrap gap-4 justify-center"
      >
        <!-- <div
          v-for="item in finalproducts"
          :key="item.id"
          class="w-40 h-50 shadow-md p-2 rounded-2 b-solid b-gray b-1 flex flex-col justify-center"
        >
          <div>{{ item.title }}</div>
          <NuxtImg :src="item.image[0]" class="w-30 h-45 object-cover" />
        </div> -->

        <div
          v-for="product in finalproducts"
          :key="product.id"
          class="p-2 border-3px border-black rounded-lg shadow-md bg-secondary w-45"
        >
          <NuxtImg
            :src="product.image[0]"
            :alt="product.title"
            class="w-40 h-40 object-cover rounded-md"
          />
          <p class="mt-2 font-semibold text-ellipsis truncate">
            {{ product.title }}
          </p>
          <p class="">$ {{ product.price }}</p>
          <!-- <Button
            label="Add to Cart"
            class="mt-2 bg-sub rounded text-gray font-semibold"
            @click="addToCart(product)"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
