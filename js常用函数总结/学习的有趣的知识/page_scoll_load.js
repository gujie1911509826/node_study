window.addEventListener('scroll', function () {
    console.log('执行');
    
    // 这里拿到滚动到顶部不可见的高度
    let scrollTop = document.documentElement.scrollTop
    // 这里拿到的是屏幕的高度
    let clientHeight = document.documentElement.clientHeight
    // 这里拿到的是这个滚动区域的高度
    let scrollHeight = document.documentElement.scrollHeight
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('加载到最低点，此时在进行处理相应的逻辑')
    }
  })
