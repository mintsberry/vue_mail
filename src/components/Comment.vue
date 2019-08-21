<template>
   <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论内容" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    <span>第{{}}楼&nbsp;&nbsp;</span>
                    <span>用户:{{}}&nbsp;&nbsp;</span>
                    <span>发表时间:{{}}&nbsp;&nbsp;</span>
                </div>
                <div class="cmt-body">
                    <span>锄禾日当午汗滴禾下土</span>
                </div>
            </div>
        </div>
        <mt-button type="danger" plain size="large">加载更多</mt-button>
   </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin-bottom: none;
        }
        .cmt-list{
            margin: 6px 0px;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    background-color: #ccc;
                    line-height: 30px;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 1em;
                }
            }
        }
    }
</style>