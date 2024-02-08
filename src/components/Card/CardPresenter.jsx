import * as Layouts from "./Items/Layouts";
import * as Items from "./Items/Items";
import { HeartTwoTone, HeartFilled } from '@ant-design/icons';

const CardPresenter = (props) => {
    return (
        <Layouts.Layout>
            <Items.Image src={"./images/cat.jpeg"}/>
            <Items.Title>첫 게시글!!</Items.Title>
            <Items.Content>안녕하세요. 제 이름은 강정현이에요. 저는 부산에 살고 있어요!</Items.Content>

            <Layouts.ColumnWrapper>
                <Layouts.RowWrapper>
                    <Items.BoldText>24.02.08</Items.BoldText>
                    <Items.LikeBtn>
                        {props.like? <HeartFilled style={{ fontSize: '16px', color:'hotpink'}} /> : <HeartTwoTone style={{ fontSize: '16px'}} twoToneColor="hotpink" /> }
                        <Items.BoldText>{1000} &nbsp;</Items.BoldText>
                    </Items.LikeBtn>
                </Layouts.RowWrapper>

                <Layouts.RowWrapper>
                    <Items.BoldText>By</Items.BoldText>
                    <Items.LikeBtn>
                        <HeartTwoTone style={{ fontSize: '16px'}} twoToneColor="hotpink" />
                        <Items.BoldText>{"NickName"} &nbsp;</Items.BoldText>
                    </Items.LikeBtn>
                </Layouts.RowWrapper>
            </Layouts.ColumnWrapper>

        </Layouts.Layout>
    );
};

export default CardPresenter;