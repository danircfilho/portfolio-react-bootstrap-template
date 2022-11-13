export const animationPage = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildred: 0.25
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const animationTitle = {
  hidden: {
    y: 80
  },
  show: {
    y: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut'
      }
  }
}

export const animationFade = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
      transition: {
        duration: 0.75,
        ease: 'easeOut'
      }
  }
}  

export const animateImage = {
  hidden: {
    scale: 1.5,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
      transition: {
        duration: 0.75,
        ease: 'easeOut'
      }
  }
}

export const scroolReview = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}