import CustomLayout from "./layout"
import InfoPlugin from "./components/info"

export default [
  InfoPlugin,
  () => {
    return {
      components: { CustomLayout }
    }
  }
]
