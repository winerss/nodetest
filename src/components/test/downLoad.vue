<template>
  <div class='hello'>
    <input type='text' placeholder='welcome' v-model='msg'>
    <input type='button' value='提交' @click='submit()'>
    <el-button style='margin-bottom:20px' type='primary' icon='document' @click='handleDownload'>导出excel</el-button>
    <el-table
      :data='tableData'
      stripe
      style='width: 100%'>
      <el-table-column
        prop='date'
        label='日期'
        width='180'>
      </el-table-column>
      <el-table-column
        prop='name'
        label='姓名'
        width='180'>
      </el-table-column>
      <el-table-column
        prop='address'
        label='地址'>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    submit () {
      this.axios
        .post('/api/home', {
          id: this.msg
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleDownload () {
      this.downloadLoading = true
      require.ensure([], () => {
        const { exportJsontoexcel } = require('@/vendor/Export2Excel')
        const tHeader = ['日期', '姓名', '地址']
        const filterVal = ['date', 'name', 'address']
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        exportJsontoexcel(tHeader, data, '列表excel')
        this.downloadLoading = false
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.hello input {
  padding: 5px
}
</style>
