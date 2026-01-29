<template>
  <div
    :class="$style.demoForm"
    data-dimensions="large"
  >
    <div :class="$style.cards" data-dimensions="small">
      <Card
        v-for="product in products"
        :key="product.id"
        orientation="vertical"
        :title="product.title"
        :subtitle="product.description"
        :src="product.image"
      >
        <Button
          :secondary="isInCart(product)"
          :icon="isInCart(product) ? undefined : 'Plus'"
          @click="addToCart(product)"
        >
          {{ isInCart(product) ? 'В корзине' : 'В корзину' }}
        </Button>
      </Card>
    </div>

    <Section
      title="Корзина"
      :caption="cartCaption"
      :with-background="true"
    >
      <Container>
        <Row
          v-for="item in cart"
          :key="item.id"
          :title="item.title"
          :subtitle="item.description"
          :has-delimiter="true"
        >
          <template #right>
            <Button
              secondary
              @click="removeFromCart(item)"
              icon="Trash"
            >
              Удалить
            </Button>
          </template>
        </Row>
      </Container>
    </Section>

    <Button
      :class="$style.buyButton"
      :disabled="cart.length === 0"
      @click="buy"
    >
      Купить
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Container, Section, Row, Card, Button } from '@codexteam/ui/vue';

interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  price?: number;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Товар 1',
    image: '',
    price: 100
  },
  {
    id: '2',
    title: 'Товар 2',
    image: '',
    price: 200
  },
  {
    id: '3',
    title: 'Товар 3',
    image: '',
    price: 300
  }
];

const cart = ref<Product[]>([]);

function isInCart(product: Product) {
  return cart.value.some((p) => p.id === product.id);
}

const cartCaption = computed(() => {
  const n = cart.value.length;
  if (n === 1) {
    return 'Всего 1 товар';
  }
  if (n >= 2 && n <= 4) {
    return `Всего ${n} товара`;
  }
  return `Всего ${n} товаров`;
});

function addToCart(product: Product) {
  if (cart.value.some((p) => p.id === product.id)) {
    return;
  }
  cart.value = [...cart.value, product];
}

function removeFromCart(product: Product) {
  cart.value = cart.value.filter((p) => p.id !== product.id);
}

function buy() {
  const orderId = Date.now();
  const totalPrice = cart.value.reduce((sum, item) => sum + (item.price || 0), 0);
  console.log("Order sent:", { orderId, totalPrice, items: cart.value.length });
  cart.value = [];
}
</script>

<style module>
.demoForm {
  display: grid;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-l);
}

.cards :global(.codex-card) {
  width: auto;
  min-width: 0;
  padding-block: var(--h-padding);
}

</style>
