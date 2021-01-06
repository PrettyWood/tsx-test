import { ref, defineComponent } from 'vue'
import styles from './Counter.module.css'

export interface CounterProps {
  startCount: number;
}

export const Counter = defineComponent({
  name: 'Counter',
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
        <div class={styles.count}>{count.value}</div>
        <button onClick={() => count.value--}>-1</button><button onClick={() => count.value++}>+1</button>
      </>
    );
  },
})
