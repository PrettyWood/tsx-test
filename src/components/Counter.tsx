import { ref, defineComponent } from 'vue'
import styles from './Counter.module.css'

export interface CounterProps {
  startCount: number;
}

export const GreenCounter = defineComponent({
  props: {
    startCount: {
      type: Number,
      default: 0,
    }
  },
  setup: (props: CounterProps) => {
    const count = ref(props.startCount)

    return () => (
      <>
        <div class={`${styles.count} ${styles.countGreen}`}>{count.value}</div>
        <button onClick={() => count.value--}>-1</button><button onClick={() => count.value++}>+1</button>
      </>
    );
  },
})

export const RedCounter = defineComponent({
  props: {
    startCount: {
      type: Number,
      default: 0,
    }
  },
  setup: (props: CounterProps) => {
    const count = ref(props.startCount)

    return () => (
      <>
        <div class={`${styles.count} ${styles.countRed}`}>{count.value}</div>
        <button onClick={() => count.value--}>-1</button><button onClick={() => count.value++}>+1</button>
      </>
    );
  },
})
