import Header from "@components/layout/Header";
import { ServiceDescriptionType } from "@container/login/NaverConnectionContainer";
import React from "react";
import { Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";

interface IServiceDescriptionProps {
  descriptionType: ServiceDescriptionType;
}

function BillimServiceDescription({
  descriptionType,
}: IServiceDescriptionProps) {
  if (!descriptionType) return null;
  const Description = serviceDescriptionProvider[descriptionType];
  return (
    <>
      <Description />
    </>
  );
}

export default BillimServiceDescription;

const DescriptionTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 12px;
`;

const DescriptionTh = styled.th`
  text-align: center;
  border: 1px solid black;
  padding: 8px;
`;
const DescriptionTd = styled.td<{ textAlignCenter?: boolean }>`
  border: 1px solid black;
  text-align: ${(props: any) => (props?.textAlignCenter ? "center" : "left")};
  padding: 8px;
`;

type ServiceDescriptionProviderType = {
  [id in ServiceDescriptionType]: () => JSX.Element;
};
type ServiceDescriptionTitleProviderType = {
  [id in ServiceDescriptionType]: string;
};

export const serviceDescriptionTitleProvider: ServiceDescriptionTitleProviderType =
  {
    service: "서비스 이용약관",
    use_personal_information: "개인 정보 수집 및 이용 동의",
    location: "위치 정보 이용 약관",
    personal_information_processing_policy: "개인 정보 처리 방침",
    marketing: "마케팅 정보 수신 약관",
  };

const serviceDescriptionProvider: ServiceDescriptionProviderType = {
  service: ServiceDescription,
  use_personal_information: UsePersonalInformationDescription,
  location: LocationDescription,
  personal_information_processing_policy:
    PersonalInformationProcessingPolicyDescription,
  marketing: MarketingDescription,
};

function ServiceDescription() {
  return (
    <>
      <Description>
        <DescriptionTitle>서비스 이용약관</DescriptionTitle>
        <DescriptionContent
          content={`
        제 1 조 (목적)
        이 약관은 퍼스트 클래스(이하 "회사"라 한다)가 운영하는 빌림(이하 "빌림")에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 플랫폼과 이용자의 의무권리·의무 및 책임사항을 규정함을 목적으로 합니다. 본 약관은 이용자가 서비스를 이용하는데 필요한 권리, 의무 및 책임사항 기타 필요한 사항을 규정하고 있으므로 주의 깊게 살펴봐 주시기 바랍니다.

        제 2 조 (정의)
        본 약관에서 사용되는 용어의 정의는 다음과 같습니다.
        ① “빌림”은 회사가 운영하는 플랫폼을 의미하며, 인터넷, 모바일 어플리케이션(이하 ‘앱’) 등을 통하여 파트너들이 제공하는 다양한 재화 또는 용역(이하 '재화 등')의 광고를 이용자에게 제공하거나, 이용자 간 거래를 중개하고, 나아가 회사 또는 이용자가 창작한 다양한 콘텐츠를 게시하고 그를 통하여 이용자 간 커뮤니케이션이 진행될 수 있도록 설정한 공간을 말하며, 아울러 이를 운영하는 사업자의 의미로도 사용합니다.
        ② “서비스”는 콘텐츠 및 그를 매개로 한 이용자 간 커뮤니케이션 공간, 파트너 재화 등의 광고 및 파트너와 고객 간 거래의 중개 등 이용자의 생활을 더 편리하게 하기 위해 회사가 빌림 플랫폼을 통하여 제공 또는 제공할 서비스를 말합니다.
        ③ "이용자"는 "빌림"에 접속하여 이 약관에 따라 "빌림"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
        ④ "회원"은 "빌림"에 개인정보를 제공하여 회원등록을 한 자로서, "빌림"의 정보를 지속적으로 제공받으며, "빌림"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
        ⑤ "비회원"은 회원에 가입하지 않고 "빌림"이 제한적으로 제공하는 서비스를 이용하는 자를 말합니다.
        ⑥ "아이디(ID)"는 "회원"의 식별과 "서비스" 이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자와 숫자의 조합을 말합니다.
        ⑦ "비밀번호"는 "회원"이 부여 받은 "아이디"와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을 말합니다. 
        ⑧ “콘텐츠”는 회사 또는 이용자가 서비스 상에 게시 또는 등록하는 모든 글, 사진, 동영상, 각종 파일, 링크, 회원소개 등(부호, 문자, 영상, 그림 등 그 형태를 불문합니다) 빌림 플랫폼 내에서 게시 또는 사용되는 일체의 정보를 말합니다.
        ⑨ “파트너”란 빌림이 지정한 절차를 마치고 빌림 플랫폼을 이용하는 자로, 빌림 플랫폼을 통해 이용자에게 자신의 재화 등을 광고 또는 판매하는 자를 말합니다.
        ⑩ ”회원정보”란 빌림의 가입을 신청한 자에게 회원가입 신청양식(이하 '신청양식')에 따라 기재를 요청하는 개인정보 및 회원의 식별과 서비스 이용을 위하여 회원이 빌림에 제공한 정보를 말합니다.
        ⑪ “물품 대여”란 빌림의 사용자가 다른 사용자가 빌림에 올린 대여 가능한 상품에 대해, 시작일과 종료일이 명시적으로 확인 가능한 기간 동안에 소정의 대여료를 내고 사용하는 행위를 말합니다. 
        
        제 3 조 (약관 등의 설명 및 개정)
        1.	빌림은 본 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 주소를 포함), 전화번호, 전자우편주소, 사업자등록번호 등을 이용자가 쉽게 알 수 있도록 빌림 플랫폼 내 초기 서비스 화면(전면)에 게시합니다. 다만, 본 약관의 내용(개정시 개정내용을 포함)은 이용자가 연결 화면을 통하여 볼 수 있도록 게시할 수 있습니다.
        2.	빌림은 필요한 경우 관련법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있으며, 본 약관을 개정할 경우 그 개정이유 및 적용일자를 명시하여 현행 약관과 함께 빌림의 초기화면에 그 적용일자 7일 전부터 적용일자 전일까지 공지합니다. 다만, 빌림이 회원에게 불리한 내용으로 약관을 변경하는 경우에는 최소한 30일 이상의 사전 유예 기간을 두고 공지하며, 이 경우 개정 전후의 내용을 회원이 알기 쉽도록 표시하겠습니다.
        3.	빌림이 개정약관을 공지 및 통지하면서 회원에게 일정 기한 내에 의사표시를 하지 않으면 동의한 것으로 본다는 뜻을 명확하게 따로 공지 및 통지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 아니한 경우, 회원이 개정약관에 동의한 것으로 봅니다. 또한, 회원이 개정약관의 적용에 동의하지 않는 경우 빌림은 개정약관의 내용을 적용할 수 없으며, 이 경우, 회원은 회원탈퇴를 할 수 있습니다. 다만, 개정 전의 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 빌림은 회원자격을 상실 시킬 수 있습니다.
        4.	본 약관을 개정할 경우 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관이 그대로 적용됩니다. 다만, 회원이 그 적용일자 이전에 체결된 계약에 대하여 개정약관의 적용을 받기 원하는 의사표시를 제3항에 의한 개정약관의 공지기간 내에 빌림에 전달하여 동의를 받은 경우에는 개정약관이 적용됩니다.
        
        제 4 조 (서비스의 제공 및 변경)
        1.	빌림은 필요한 경우 특정 서비스에 관하여 적용될 사항(이하 '개별약관')을 정하여 이를 빌림 플랫폼을 통해 미리 공지할 수 있습니다.
        
        제 5 조 (회원가입)
        1.	회원으로 가입하고자 하는 이용자는 회원정보를 기입한 후 본 약관과 개인정보수집 및 이용에 동의한다는 의사표시를 함으로써 회원가입을 신청할 수 있습니다.
        2.	빌림은 제1항과 같이 회원가입을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
        ①	가입신청자가 회원 가입일 현재 만 14세 미만인 경우
        ②	회원정보에 허위, 기재 누락, 오기가 있는 경우
        ③	회원이 자발적인 의사로 회원탈퇴를 한 후 1개월이 지나지 아니한 경우
        ④	회원으로 등록하는 것이 기술상 현저히 곤란한 경우
        ⑤	기타 본 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된 경우 및 빌림이 합리적인 판단에 의하여 필요하다고 인정하는 경우
        3.	가입 신청의 처리는 신청 순서에 의하며, 회원가입의 완료 시기는 신청에 대한 빌림의 승낙의 의사표시가 신청자에게 도달한 시점으로 합니다.
        4.	회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 빌림에 회원정보 수정 등의 방법으로 변경사항을 알려 빌림이 원활한 서비스를 제공할 수 있도록 조력하여야 할 의무가 있습니다. 회원이 이러한 의무를 해태 하여 서비스의 불완전 제공 또는 미 제공 등 불이익이 발생하는 경우라도, 빌림은 별도의 귀책사유가 없는 한 그에 대한 책임을 부담하지 아니합니다.
        
        제 6 조 (개인정보보호)
        회사는 이용자의 개인정보를 소중하게 생각합니다. 회사는 관련법령에 따른 허용범위 및 이용자의 동의 내에서, 서비스의 원활한 제공을 위하여 필요한 범위로만 이용자의 개인정보를 처리합니다. 회사가 이용자의 개인정보를 안전하게 처리하기 위하여 기울이는 노력 기타 관련한 상세한 내용은 개인 정보 처리 방침을 확인하여 주시기 바랍니다.
        
        제 7 조 (ID 및 비밀번호 관리)
        1.	회원의 ID 및 비밀번호는 회원 본인만 이용할 수 있습니다. 회원은 다른 사람이 자신의 ID 및 비밀번호를 이용하도록 허락하여서는 아니되며, 다른 사람이 자신의 ID 및 비밀번호를 무단으로 사용할 수 없도록 관리하여야 합니다.
        2.	회원의 과실로 인한 ID 또는 비밀번호의 유출, 기타 본 약관에 반하여 이루어진 회원의 ID 또는 비밀번호에 대한 양도, 대여 행위로 인하여 발생하는 손실이나 손해에 대하여는 빌림의 귀책사유가 없는 한 회원 본인이 전적으로 책임을 부담하오니, 유의하여 주시기 바랍니다.
        3.	빌림은 회원 ID의 유출 우려가 있거나, ID에 반사회적 또는 미풍양속에 어긋나는 표현이 포함되어 있는 경우, 기타 이용자를 회사 및 빌림의 운영자로 오인할 우려가 있는 경우에는 사전예고 없이 본 약관 제11조 제4항에 따라 회원자격을 제한하거나 해당 ID의 이용을 제한할 수 있습니다.
        4.	회원은 자신의 ID 및 비밀번호를 도난 당하거나, 무단 사용을 발견하면, 이를 즉시 빌림에 통보하여야 하며, 빌림은 통보를 받은 즉시 회원의 정보를 보호하기 위하여 필요한 최선의 노력을 다할 것입니다.
        
        제 8 조 (빌림에서 대여할 수 없는 것)
        빌림은 사용자의 편의를 위해 다양한 상품을 게시할 수 있으며, 사용자는 보다 편리한 방법으로 빌림에서 원하는 찾고 대여할 수 있습니다. 다만 아래 각 호의 경우에는 빌림 서비스 내에서 상품을 등록할 수 없으며 대여할 수도 없습니다.
        ①	술, 담배, 마약 및 마약 관련 도구
        ②	불법 품목, 불법활동을 홍보하는 품목 및 규제가 엄격한 품목
        ③	국제적으로 규제되는 품목들
        ④	포르노 및 외설적인 콘텐츠
        ⑤	제3 자의 지적 재산권을 침해하는 항목
        ⑥	동물 및 식물
        ⑦	그 외 기타 회사측에서 서비스 내에 등록할 수 없다고 판단되는 것들
        
        제 9 조 (물품 대여)
        1.	회원은 빌림 서비스 내에서 원하는 물품의 대여를 신청할 수 있습니다.
        2.	물품을 대여하려는 회원은 빌림 서비스 내에서 대여 가능한 상품, 대여 요금, 대여 가능 기간, 대여/반납 장소 및 기타 조건 등을 미리 확인하여 대여할 수 있습니다.
        3.	회사는 회원이 다음 각 호의 어느 하나에 해당하는 경우 대여 신청을 제한할 수 있습니다
        ①	반납이 이뤄지지 않은 기존 내역이 존재할 때
        ②	신원 확인이 불가능한 회원일 때
        ③	위 각 호에 준하는 사항으로서 대여 신청을 거절할 만한 객관적인 사유가 있을 때
        
        제 10 조 (물품 반납)
        1.  회원은 빌림 서비스 내에서 대여한 물품에 대해 반납을 해야 합니다.
        2.  회원은 대여 시 선택했던 반납 일정에 맞춰서 반납하는 것을 원칙으로 합니다. 단, 회원간 
            조율이 가능한 경우 조율 가능한 일정에 반납할 수 있습니다.
        3.  반납 일정 2시간 이후 반납 시, 물품을 공급한 회원에게 이에 준하는 대여료를 지급해야
            합니다. 
        4.	회원의 반납 일정 이후에 이루어진 반납으로 인해 다른 회원의 대여에 문제가 생겼을 경우,
        회사가 개입하여 해당 회원에게 책임을 물을 수 있습니다.
        5.	대여한 물품이 손상, 훼손, 또는 분실된 경우 아래와 같은 규칙이 적용됩니다.
        ①	대여한 물품의 손상, 또는 훼손으로 인해 대여 당시의 사용가치가 훼손된 경우 회사는 수리를 위한 견적을 낼 것이며, 이에 따른 해당 수리비용을 비롯해 발생하는 비용에 대해서 해당 회원은 책임을 질 의무가 있습니다.
        ②	대여한 물품의 생활 기스 또는 시간이 지나면서 자연적으로 생기는 손상에 대해선 회원이 책임지지 않아도 됩니다.
        
        제 11 조 (통지 및 공지)
        빌림은 이용자와의 의사소통을 중요하게 생각합니다.
        1.	이용자는 언제든지 고객센터를 통해 서비스와 관련한 의견을 전달할 수 있습니다.
        2.	빌림의 회원에 대한 통지는 회원정보에 기재된 E-mail 주소로의 발송 또는 휴대폰 번호로 SMS를 보내는 등 전자적 방법으로 이뤄지며, 이러한 전자적 통지가 회원에 도달한 때에 효력이 발생합니다.
        3.	빌림이 불특정 다수의 회원에게 통지를 하는 경우 1주일 이상 빌림에 게시하는 방법으로 제2호의 개별 통지를 대신할 수 있습니다. 다만, 특정 회원의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 해당 회원에게 개별적으로 통지하는 것을 원칙으로 합니다.
        4.	빌림이 비회원에 대한 통지를 할 경우 본 약관에 별도 규정이 없는 한 이용자가 제공한 E-mail, 휴대폰 번호 등으로 통지할 수 있으며, 불특정 다수의 비회원에게 통지하는 경우 제3호에 따라 통지할 수 있습니다.
       
        제 12 조 (회원탈퇴 등)
        1.	회원이 더이상 빌림 이용을 원치 않는 때에는 언제든지 빌림을 통하여 탈퇴를 요청할 수 있으며, 회사는 즉시 탈퇴 조치합니다. 단, 회원탈퇴로 인해 발생하는 불이익은 회원 본인이 부담하여야 하며, 탈퇴 처리가 완료되면 빌림이 회원에게 부가적으로 제공한 각종 혜택이 소멸 또는 회수될 수 있으니 신중하게 탈퇴 요청하여 주시기 바랍니다.
        2.	회원의 탈퇴 처리가 완료된 경우 이용자가 게시한 콘텐츠는 삭제가 불가능합니다.
        3.	탈퇴한 회원이 다시 한번 빌림 이용을 희망할 경우, 회사는 그를 거절할 수 있습니다.
        4.	회원이 다음 각 호의 사유에 해당하는 경우 빌림은 부득이하게 회원자격을 제한 및 상실시키거나 재이용에 제한을 둘 수 있습니다.
        ①	회원이 사망한 경우
        ②	서비스 이용과 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
        ③	제5조 2항의 승낙거부사유가 있음이 확인된 경우
        ④	제7조 제3항의 ID 이용제한 사유가 있음이 확인된 경우
        ⑤	회원 자신 또는 제3자의 ID를 이용하여 직접 소비하기 위한 의사 없이 재판매 등 상업적/영리적 목적으로 재화 등을 구매하거나, 그와 같은 사정이 합리적으로 의심되는 경우
        ⑥	빌림에 게시된 각종 콘텐츠 기타 자료를 무단으로 수집하여 복제, 송신, 출판, 배포, 방송, 기타 방법에 의하여 영리적 목적으로 유용하거나 제3자에게 유용하게 하는 경우
        ⑦	회사가 제공하는 서비스 이용방법을 따르지 않고 매크로, 다수 생성 ID 사용 등 비정상적인 방법을 통해 서비스를 이용(어뷰징)하거나 시스템에 접근하는 경우
        ⑧	빌림 및 기타 제3자의 저작권 등 지식재산권에 대한 침해행위가 확인된 경우
        ⑨	빌림 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위가 확인된 경우
        ⑩	외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보 및 성별, 종교, 장애, 연령 등을 차별하거나 이에 대한 편견을 조장하는 내용 등 본 약관 제25조 제1항 각 호에 해당하는 행위가 확인된 경우
        ⑪	본 약관 또는 개별약관을 위반한 경우
        ⑫	기타 회원의 불법행위 등 빌림이 서비스 제공을 거부할 필요가 있다고 인정하는 경우
        5.	빌림이 회원자격을 상실시키는 경우에는 회원 등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원 등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.
        6.	본 조에 의하여 빌림이 회원자격을 상실 시키더라도, 상실 이전에 이용한 서비스와 관련하여서는 본 약관이 적용됩니다.
        
        제 13 조 (기타 서비스의 제공)
        1.	빌림은 이용자를 위해 다음과 같은 서비스를 제공합니다.
        ①	파트너가 제공하는 재화 등의 광고, 계약체결 지원 등 파트너와 고객 간 거래의 중개와 관련한 일체의 서비스
        ②	회사 또는 이용자가 창작한 콘텐츠를 게시하고, 관련한 이용자 간 커뮤니케이션 등을 지원하기 위한 운영 서비스
        ③	기타 이용자를 위하여 제공하는 서비스
        2.	빌림이 제공하기로 한 서비스에 관하여 해당 내용을 재화 등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 본 약관 제8조에서 정한 방법 등으로 즉시 통지하도록 하겠습니다.
       
        제 14 조 (서비스의 중단)
        1.	빌림은 이용자에게 서비스를 제공하기 위하여 최선의 노력을 다합니다. 다만, 아래 각 호의 경우에는 부득이하게 서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다.
        ①	PC 등 정보통신설비의 보수 점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우
        ②	파트너와의 계약종료 등 빌림의 제반사정으로 서비스를 유지할 수 없는 경우
        ③	기타 천재지변, 국가비상사태 등 불가항력적 사유가 발생한 경우
        2.	빌림은 제1항의 사유로 서비스의 제공이 제한 또는 중단되는 경우 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 다만, 빌림이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
       
        제 15 조 (정보의 제공 및 광고의 게재)
        1.	빌림은 서비스를 운영함에 있어 다양한 정보를 빌림 내 지정하는 위치에 게시하거나 본 약관 제8조에서 정한 방법 등으로 이용자에게 제공할 수 있습니다. 단, 상업적 광고는 사전에 광고수신 여부 및 수신방법에 별도로 동의한 이용자에 한정하여 제공합니다. 그리고 이용자는 빌림에게 법령에 따라 부과된 의무이행과 관련한 절차안내, 고객문의 등에 대한 답변, 기타 거래관련 정보 등을 제외하고는 언제든지 빌림이 제공하는 정보의 수신을 거부할 수 있습니다.
        2.	빌림은 파트너가 게시한 광고를 전달하고 매개하는 역할을 할 뿐이며, 이용자가 해당 광고를 이용하거나 판촉활동에 참여하는 등의 경우 달리 귀책사유가 없는 한 빌림은 이에 대해 일체의 책임을 지지 않으니 유의하여 주시기 바랍니다.
      
        제 16 조 (콘텐츠에 대한 운영)
        1.	빌림은 회원이 다음 각 호에 해당한다고 판단되는 콘텐츠를 등록하였을 경우 부적절한 콘텐츠로 판단하고 이를 삭제하거나 게시를 중단할 수 있습니다.
        ①	빌림, 이용자 또는 제3자를 비난하거나 명예를 훼손시키는 경우
        ②	빌림의 이용목적에 부합하지 않거나 해당 서비스의 취지와 무관한 콘텐츠
        ③	타인의 저작권, 상표권 등을 침해하는 콘텐츠
        ④	음란성 콘텐츠와 혐오성 콘텐츠
        ⑤	특정인의 개인정보가 포함된 콘텐츠
        ⑥	특정 단어 또는 문구를 반복 산입하는 등의 비정상적인 콘텐츠 또는 프로그램 등을 이용하여 기계적인 패턴 글로 도배하는 경우
        ⑦	회사가 허용하지 아니한 영리활동과 관련된 콘텐츠
        ⑧	악성코드나 스파이웨어 등이 실행되어 다른 이용자, 파트너 기타 제3자의 시스템 성능 저하, 개인정보 유출 등의 피해를 줄 수 있는 악의적인 코드를 담고 있는 콘텐츠
        ⑨	기타 관련법령 및 빌림 서비스 별 개별약관 등에 위반된다고 판단되는 경우
        2.	회원의 콘텐츠가 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』, 『개인정보 보호법』 및 『저작권법』 등 기타 법령에 위반되는 내용을 포함하는 경우, 권리자는 관련법령이 정한 절차에 따라 해당 콘텐츠의 게시중단 및 삭제 등을 요청할 수 있으며, 빌림은 관련법령에 따라 권리자의 지식재산권을 보호하기 위해 필요한 조치를 취할 수 있습니다.
       
        제 17 조 (콘텐츠의 저작권 등)
        1.	회원이 빌림 내에 게시한 콘텐츠의 저작권을 포함한 지식재산권은 회원이 보유하며, 빌림이 작성한 콘텐츠에 대한 저작권을 포함한 지식재산권은 빌림이 보유합니다.
        2.	빌림은 회원과 타인의 지식재산권이 서로 존중되고 보호받을 수 있도록 노력할 책임이 있고, 특히 타인에 의해 회원의 지식재산권 침해가 확인될 경우 즉시 회원의 권리 보호를 위하여 필요한 조치를 취하고 이를 회원에게 통지하는 등 빌림에 회원이 게시한 콘텐츠의 보호를 위하여 최선을 다하겠습니다.
        3.	회원의 빌림 내 콘텐츠 게시는, 다음 각 호의 사항을 허락한 것으로 간주합니다.
        ①	다른 회원의 동 콘텐츠 사용
        ②	회사가 동 콘텐츠를 검색결과로 사용
        ③	회원은 본인이 빌림 내에 게시한 콘텐츠를 회사가 국내 또는 국외에서 다음 각 호의 목적에 따라 필요한 범위 내에서 해당 콘텐츠를 편집(수정, 복제, 배포 등을 의미하여 이에 한정하지 아니함) 및 사용하는 것을 허락합니다.
        i.	서비스 내에서 콘텐츠를 사용하거나, 서비스를 홍보하기 위한 목적으로 인터넷, 모바일, SNS를 포함한 디지털 마케팅 채널 및 통신사 등에게 콘텐츠의 내용을 보도, 방영하는 경우
        ii.	콘텐츠를 복제ᆞ전송ᆞ전시하는 방법으로 제휴서비스에서 콘텐츠를 제공하는 경우
        4.	제4항에도 불구하고 회원은 언제든 고객센터를 통하여 자신이 게시한 콘텐츠에 대한 삭제, 비공개, 사용중단 등을 요청할 수 있고, 빌림은 본 약관 제8조에 정한 방법으로 회원에게 콘텐츠의 사용 내용을 공지할 수 있습니다.
        5.	회원은 본인이 게시한 콘텐츠가 본 약관 제25조에 위반되지 아니함을 보증합니다. 회원이 작성한 콘텐츠가 본 약관 제25조 및 관련법령을 위반한 경우 빌림의 귀책사유가 없는 한 회원은 그로 인한 모든 책임을 부담한다는 점을 유의하여 주시기 바랍니다.
        6.	본 약관 제11조에 따라 회원을 탈퇴하는 경우 회원이 빌림 내에 게시한 콘텐츠는 삭제됩니다. 다만, 회원이 탈퇴하기 이전에 허용하였던 스크랩, 공유, 댓글 등과 같은 콘텐츠 이용이나 서비스의 운영에 따라 필요하거나 법률에서 요구되는 경우에는 예외적으로 삭제되지 않을 수 있습니다.
        7.	이용자는 서비스를 이용함으로써 얻은 정보 중 빌림이 지식재산권을 보유한 정보를 빌림의 사전 승낙 없이 영리 목적으로 이용하거나 제3자가 이용하게 하여서는 아니됩니다.
      
        제 18 조 (분쟁해결)
        빌림은 이용자 사이에 분쟁이 발생하지 않도록 최선을 다할 것입니다. 그럼에도 불구하고 서비스 이용과 관련하여 분쟁이 발생할 경우 이는 거래당사자인 이용자간 해결하여야 함을 유의하여 주시기 바랍니다. 다만, 빌림은 가능한 한 최선의 노력을 다하여 거래당사자 간의 분쟁이 신속하게 처리될 수 있도록 성실하게 협조할 것입니다.
     
        제 19 조 (준거법 및 관할법원)
        1.	본 약관 또는 서비스는 대한민국의 법률에 따라 규정되고 이행됩니다.
        2.	본 약관 또는 서비스와 관련된 분쟁은 『민사소송법』상의 관할법원에 소를 제기할 수 있습니다.
        
        부칙
        본 약관은 2023년 5월 25일부터 시행합니다.
        
        `}
        />
      </Description>
    </>
  );
}

function UsePersonalInformationDescription() {
  return (
    <Description>
      <DescriptionTitle>개인정보 수집 및 이용 동의</DescriptionTitle>
      <DescriptionSubTitle>
        [개인정보의 수집 항목 및 이용 목적]
      </DescriptionSubTitle>
      <DescriptionContent
        content={`회사는 다양하고 편리한 서비스를 제공하기 위해 아래의 정보를 고객의 동의를 받아 수집할 수 있습니다.`}
      />
      <DescriptionTable>
        <tr>
          <DescriptionTh colSpan={2}>구분</DescriptionTh>
          <DescriptionTh>수집항목</DescriptionTh>
          <DescriptionTh>이용 목적</DescriptionTh>
        </tr>
        <tr>
          <DescriptionTd textAlignCenter>회원가입</DescriptionTd>
          <DescriptionTd textAlignCenter>필수</DescriptionTd>
          <DescriptionTd
            dangerouslySetInnerHTML={{
              __html: replaceNewlineWithBr(`회원가입	필수	이름, 아이디, 비밀번호,
이메일, 휴대폰번호, 만 14세 이상 여부, 주소
[SNS 계정을 통한 회원가입 시]
- 네이버 : 이름, 이메일	회원 서비스 이용에 따른 본인 확인 및 회원관리, 공지/불만처리,
고객상담 등
`),
            }}
          ></DescriptionTd>
          <DescriptionTd
            dangerouslySetInnerHTML={{
              __html: replaceNewlineWithBr(`
              회원가입	필수	이름, 아이디, 비밀번호,
              이메일, 휴대폰번호, 만 14세 이상 여부, 주소
              [SNS 계정을 통한 회원가입 시]
              - 네이버 : 이름, 이메일	회원 서비스 이용에 따른 본인 확인 및 회원관리, 공지/불만처리,
              고객상담 등             
`),
            }}
          ></DescriptionTd>
        </tr>
        <tr>
          <DescriptionTd colSpan={2}>
            서비스 이용 시 생성되어 수집되는 정보
          </DescriptionTd>
          <DescriptionTd
            dangerouslySetInnerHTML={{
              __html: replaceNewlineWithBr(`
              IP주소, 서비스 이용기록,
              접속시간 등 로그, 쿠키, 불량 이용 기록 등           
              `),
            }}
          ></DescriptionTd>
          <DescriptionTd>본인확인 및 서비스이용 통계</DescriptionTd>
        </tr>
      </DescriptionTable>
      <DescriptionSubTitle>[개인정보의 수집 방법]</DescriptionSubTitle>
      <DescriptionContent
        content={`회사는 이용자들이 회원서비스를 이용하기 위해 회원으로 가입하실 때 서비스 제공을 위한 필수적인 정보들을 온라인 상에서 입력 받고 있습니다. 또한 서비스 내에서의 설문조사나 이벤트 행사 시 통계분석이나 경품 제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할 것입니다`}
      />
      <DescriptionSubTitle>[개인정보의 보유 및 이용기간]</DescriptionSubTitle>
      <DescriptionContent
        content={`(1) 개인정보의 수집 및 이용목적 또는 제공받은 목적이 달성되면 지체없이 파기합니다. 단, ‘전자상거래 등에서의 소비자 보호에 과한 법률’, ‘통신비밀보호법’과 같이 관계법률에 의하여 보존이 필요할 경우에는 그 기간 동안 보존합니다.
        (2) 회원이 12개월간 서비스 이용 기록이 없는 경우 ‘정보통신망 이용 촉진 및 정보보호 등에 관한 법률’ 제 29조에 근거하여 회원에게 사전 통지하고 다른 회원의 개인정보와 분리하여 보관합니다. 분리 보관된 개인정보는 법적 보관기간 경과 후 파기하며, 분리 보관되기 30일 전에 회원에게 분리 보관 사실과 항목, 기간 만료일 등을 전자우편·서면·모사전송·전화 또는 이와 유사한 방법 중 어느 하나의 방법으로 회원에게 알립니다.
        `}
      />
    </Description>
  );
}
function LocationDescription() {
  return (
    <Description>
      <DescriptionTitle>위치정보 이용 약관</DescriptionTitle>
      <Typography variant="h6">[개인위치정보의 이용 또는 제공]</Typography>
      <DescriptionContent
        content={`
    제1조 (위치정보의 정의 등)
    1.	본 약관에서 사용하는 “위치정보”란 이동성이 있는 물건 또는 개인이 특정한 시간에 존재하거나 존재했던 장소에 관한 정보로서 전기통신설비 및 전기통신회선설비를 이용하여 측위된 것을 말합니다.
    2.	본 약관에서 사용하는 “개인위치정보”란 특정 개인의 위치정보(위치정보만으로는 특정 개인의 위치를 알 수 없는 경우에도 다른 정보와 용이하게 결합하여 특정 개인의 위치를 알 수 있는 것을 포함한다)를 말합니다.
    3.	회사는 본 약관에 동의하여 개인위치정보의 이용을 승낙한 고객에 한하여 위치정보법 등 관련 법률에서 정한 바에 따라 개인위치정보를 취득하며 서비스의 목적범위 내에서 위치정보를 이용합니다.
    
    제2조 (고객의 개인위치정보보호)
    회사는 관련 법령이 정하는 바에 따라 고객의 개인위치정보를 보호하기 위해 노력합니다.
    
    제3조 (개인위치정보의 이용 또는 제공)
    1.	회사는 서비스 제공을 위하여 회사가 수집한 고객의 위치정보를 이용할 수 있으며, 고객이 본 약관에 동의하면 위치정보 이용에 동의한 것으로 간주됩니다.
    2.	회사는 고객이 제공한 개인위치정보를 해당 고객의 동의 없이 서비스 제공 이외의 목적으로 이용하지 않습니다.
    3.	회사는 아래 각호의 경우 고객이 지정한 휴대전화나 이메일(E-mail) 주소로 통보할 수 있습니다.
    ①	개인위치정보를 수집한 해당 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 않은 경우
    ②	개인위치정보 주체가 개인위치정보를 수집한 해당 외의 통신단말장치 또는 (E-mail) 주소 등으로 통보할 것을 요청한 경우
    4.	회사는 개인위치정보를 회원이 지정하는 제3자에게 제공하는 경우에는 개인위치정보를 수집한 당해 통신 단말장치로 회원에게 제공받는 자, 제공일시 및 제공목적을 매회 즉시 또는 위치정보 보호법의 범위 내에서 회사가 정한 주기 중 회원이 선택한 방식으로 통보합니다.
    단, 회사가 제3자에 대한 정보제공 내역을 주기적으로 모아서 통보할 경우에는 아래의 내용에 대해 알리고 고객의 동의를 받습니다.
    ①	정보제공내역을 모아서 통보하는 횟수 또는 기간
    ②	개인위치정보주체의 요청이 있는 경우에는 즉시 통보 방법으로 변경할 수 있다는 사실 및 그 요청 방법
    
    제 4 조 (개인위치정보 이용/제공사실 확인자료의 보유)
    1.	회사는 위치정보법 제16조 제2항에 근거하여 고객에 대한 위치정보 이용/제공사실 확인자료를 위치정보시스템에 자동으로 기록하며, 고객 불만에 응대하기 위하여 기록시점으로부터 6개월간 보존합니다.
    2.	위치정보법 제24조 제4항의 규정에 따라 고객이 동의의 전부 또는 일부를 철회하면 그 즉시 회사는 수집된 개인위치정보와 위치정보 이용제공사실 확인자료(동의의 일부를 철회할 때에는 철회하는 부분의 개인위치정보와 위치정보 이용제공사실 확인자료에 한합니다)를 파기합니다. 다만, 국세기본법, 법인세법, 부가가치세법, 기타 관계 법령의 규정에 따라 보존할 필요성이 있으면 관계 법령에 따라 보존합니다.
    
    제 5 조 (개인위치정보의 보유목적 및 보유기간)
    회사가 고객의 개인위치정보를 이용하였다면 회사는 위치정보법 제16조 제2항의 규정에 따라 기록·보존해야 하는 위치정보이용 제공사실 확인자료 이외의 해당 개인위치정보를 위치정보법 제23조에 따라 고객이 동의한 목적범위 내에서 이용하고 고객의 불만에 응대하기 위하여 6개월간 보유하며 6개월이 지나면 바로 파기합니다.
    
    제 6 조 (법정대리인의 권리)
    1.	회사가 14세 미만 아동의 개인위치정보를 이용하거나 제공하고자 할 때에는 그 법정 대리인의 동의를 얻어야 합니다.
    2.	법정 대리인이 동의하는 경우에 이를 준용합니다. 이때 법정 대리인을 고객으로 봅니다.
    
    제 7 조 (8세 이하의 아동 등의 보호를 위한 위치정보 이용)
    1.	회사는 아래 각호 1에 해당하는 자(이하 "8세 이하의 아동 등")의 보호의무자가 8세 이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 수집·이용 또는 제공에 동의하면 본인의 동의가 있는 것으로 봅니다.
    ①	8세 이하의 아동
    ②	피성년후견인
    ③	장애인복지법 제2조 제2항 제2호의 규정에 따른 정신적 장애를 가진 자로서 장애인 고용촉진 및 직업재활법 제2조 제2호의 규정에 따라 중증장애인에 해당하는 자(장애인복지법 제32조의 규정에 따라 장애인등록을 한 자에 한합니다.)
    1.	제1항의 규정에 따른 8세 이하 아동 등의 보호의무자는 해당 아동을 사실상 보호하는 자로서 다음 각 호의 1에 해당하는 자를 말합니다.
    ①	8세 이하의 아동의 법정 대리인 또는 보호시설에 있는 미성년자의 후견 직무에 관한 법률 제3조의 규정에 따른 후견인
    ②	피성년후견인의 법정 대리인
    ③	본 조 제1항 제3호의 자의 법정 대리인 또는 「장애인복지법」 제58조 제1항 제1호의 규정에 따른 장애인거주시설(국가 또는 지방자치단체가 설치·운영하는 시설에 한합니다)의 장, 정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률 제22조의 규정에 따른 정신요양시설의 장 및 같은 법 제26조에 따른 정신재활시설(국가 또는 지방자치단체가 설치·운영하는 시설에 한합니다)의 장
    2.	8세 이하 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 수집·이용 또는 제공에 동의하고자 하는 보호의무자는 서명동의서에 보호의무자임을 증명하는 서류를 첨부하여 회사에 제출해야 합니다.
    `}
      />
    </Description>
  );
}
function PersonalInformationProcessingPolicyDescription() {
  return (
    <Description>
      <DescriptionSubTitle>개인정보 처리 방침</DescriptionSubTitle>
      <DescriptionContent
        content={` 퍼스트클래스는 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개하며, 본 개인정보 처리방침을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다. 개인정보 처리 방침은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른 개인정보 처리 방침의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 이용자들께서는 사이트 방문 시 수시로 확인하시기 바랍니다.`}
      />
      <p>
        <DescriptionContent
          content={`퍼스트클래스의 개인정보 처리 방침은 다음과 같은 내용을 담고 있습니다.

          1. 개인정보 수집에 대한 동의
          2. 수집하는 개인정보 항목 및 수집방법
          3. 개인정보의 수집 및 이용목적
          4. 수집하는 개인정보의 보유 및 이용기간
          5. 개인정보의 파기 절차 및 방법
          6. 수집한 개인정보의 공유 및 제공
          7. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항
          8. 쿠키(Cookie)의 운용 및 거부
          9. 개인정보의 제3자 제공
          10. 개인정보의 처리 위탁
          11. 개인정보보호를 위한 기술적/관리적 대책
          12. 개인정보 관련 의견수렴 및 불만 처리에 관한 사항
          13. 개인정보 보호책임자 및 담당자의 소속-성명 및 연락처
          14. 이용자 및 법정대리인의 권리와 그 행사방법
          15. 권익침해 구제방법
          16. 고지의 의무
          `}
        />
      </p>
      <DescriptionContent
        content={`1. 개인정보 수집에 대한 동의
          퍼스트클래스는 이용자들이 회사의 개인 정보 수집 이용 동의 또는 이용약관의 내용에 대하여 「동의」버튼 또는 「취소」버튼을 클릭할 수 있는 절차를 마련하여, 「동의」버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.
          
          2. 수집하는 개인정보의 항목 및 수집방법
          가. 수집 항목
          회사는 다양하고 편리한 서비스를 제공하기 위해 아래의 정보를 고객의 동의를 받아 수집할 수 있습니다.
          
          `}
      />
      <DescriptionTable>
        <tr>
          <DescriptionTh colSpan={2}>구분</DescriptionTh>
          <DescriptionTh>수집항목</DescriptionTh>
          <DescriptionTh>이용 목적</DescriptionTh>
        </tr>
        <tr>
          <DescriptionTd textAlignCenter>회원가입</DescriptionTd>
          <DescriptionTd textAlignCenter>필수</DescriptionTd>
          <DescriptionTd
            dangerouslySetInnerHTML={{
              __html: replaceNewlineWithBr(`이름, 아이디, 비밀번호,
              이메일, 휴대폰번호, 만 14세 이상 여부, 주소
              [SNS 계정을 통한 회원가입 시]
              - 네이버 : 이름, 이메일              
`),
            }}
          ></DescriptionTd>
          <DescriptionTd
            dangerouslySetInnerHTML={{
              __html:
                replaceNewlineWithBr(`회원 서비스 이용에 따른 본인 확인 및 회원관리, 공지/불만처리,
              고객상담 등                         
`),
            }}
          ></DescriptionTd>
        </tr>
        <tr>
          <DescriptionTd textAlignCenter colSpan={2}>
            서비스 이용 시 생성되어 수집되는 정보
          </DescriptionTd>
          <DescriptionTd
            dangerouslySetInnerHTML={{
              __html: replaceNewlineWithBr(`IP주소, 서비스 이용기록,
              접속시간 등 로그, 쿠키, 불량 이용 기록 등
              `),
            }}
          ></DescriptionTd>
          <DescriptionTd textAlignCenter>
            본인확인 및 서비스이용 통계
          </DescriptionTd>
        </tr>
      </DescriptionTable>
      <p>
        <DescriptionContent
          content={`나. 수집 방법
회사는 이용자들이 회원서비스를 이용하기 위해 회원으로 가입하실 때 서비스 제공을 위한 필수적인 정보들을 온라인 상에서 입력 받고 있습니다. 또한 서비스 내에서의 설문조사나 이벤트 행사 시 통계분석이나 경품 제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할 것입니다. 퍼스트클래스는 다음과 같은 방법으로 개인정보를 수집합니다.
- 홈페이지, 모바일기기, 서면양식, 팩스, 전화, 상담 게시판, 이메일, 이벤트 응모, 배송요청
- 협력회사로부터의 제공
- 생성정보 수집 툴을 통한 수집
다. 기타
서비스 내에서의 설문조사나 이벤트 행사 시 통계분석이나 경품제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할 것입니다.

3. 개인정보의 수집 및 이용 목적
퍼스트클래스는 이용자의 사전 동의 없이는 이용자의 개인 정보를 수집하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다.
가. 신규 서비스의 개발
이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다. 회사는 신규 서비스 개발이나 컨텐츠의 확충 시에 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선 순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.
나. 회원관리
회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인, 주문 및 결제처리, 배송처리
다. 마케팅 및 광고에 활용
신규 서비스 개발과 이벤트 행사에 따른 정보 전달 및 맞춤 서비스 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계

4. 수집하는 개인정보의 보유 및 이용기간
(1) 개인정보의 수집 및 이용목적 또는 제공받은 목적이 달성되면 지체없이 파기합니다. 단, ‘전자상거래 등에서의 소비자 보호에 과한 법률’, ‘통신비밀보호법’과 같이 관계법률에 의하여 보존이 필요할 경우에는 그 기간 동안 보존합니다.
(2) 회원이 12개월간 서비스 이용 기록이 없는 경우 ‘정보통신망 이용 촉진 및 정보보호 등에 관한 법률’ 제 29조에 근거하여 회원에게 사전 통지하고 다른 회원의 개인정보와 분리하여 보관합니다. 분리 보관된 개인정보는 법적 보관기간 경과 후 파기하며, 분리 보관되기 30일 전에 회원에게 분리 보관 사실과 항목, 기간 만료일 등을 전자우편·서면·모사전송·전화 또는 이와 유사한 방법 중 어느 하나의 방법으로 회원에게 알립니다.
가. 관련법령에 의한 정보 보유 사유
- 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
- 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)
- 방문(로그)에 관한 기록 : 3개월(통신비밀보호법)
 
5. 개인정보의 파기 절차 및 방법
퍼스트클래스는 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.
가. 파기절차
이용자가 서비스 이용 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
나. 파기방법
- 종이에 출력된 개인정보 : 분쇄기로 분쇄하거나 소각
- 전자적 파일 형태로 저장된 개인정보 : 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제

6. 수집한 개인정보의 공유 및 제공
퍼스트클래스는 이용자들의 개인정보를 동의받은 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공유 및 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
- 이용자들이 사전에 공유 및 제공에 동의한 경우
- 서비스 제공에 따른 요금정산을 위하여 필요한 경우
- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우

7. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항
회원님이 원하실 경우 언제라도 당사에서 개인정보를 열람하실 수 있으며 보관된 필수 정보를
수정하실 수 있습니다. 또한 회원 가입 시 요구된 필수 정보 외의 추가 정보는 언제나 열람,
수정, 삭제할 수 있습니다. 회원님의 개인정보 변경 및 삭제와 회원탈퇴는 당사의 고객센터에서 로그인(Login) 후 이용하실 수 있습니다.

8. 쿠키(Cookie)의 운용 및 거부
가. 쿠키의 사용 목적
① 회사는 개인 맞춤 서비스를 제공하기 위해서 이용자에 대한 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트 서버가 이용자의 브라우저에게 전송하는 소량의 정보로서 이용자 컴퓨터의 하드디스크에 저장됩니다.
② 회사는 쿠키의 사용을 통해서만 가능한 특정된 맞춤형 서비스를 제공할 수 있습니다.
③ 회사는 회원을 식별하고 회원의 로그인 상태를 유지하기 위해 쿠키를 사용할 수 있습니다.
나. 쿠키의 설치/운용 및 거부
① 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 조정함으로써 모든 쿠키를 허용/거부하거나, 쿠키가 저장될 때마다 확인을 거치도록 할 수 있습니다.
- 쿠키 설치 허용 여부를 지정하는 방법(Internet Explorer의 경우)은 다음과 같습니다.
ºInternet Explorer 웹 브라우저
[도구] > [인터넷 옵션] > [개인정보] 탭 > [설정] 변경
ºChrome 웹 브라우저
우측 상단 메뉴 [설정] > [고급] > [콘텐츠 설정] > [쿠키] 설정
② 쿠키의 저장을 거부할 경우에는 개인 맞춤서비스 등 회사가 제공하는 일부 서비스는 이용이 어려울 수 있습니다.

9. 개인정보보호를 위한 기술적/관리적 대책
퍼스트클래스는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조, 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 관리적, 기술적, 물리적 대책을 강구하고 있습니다.
가. 관리적 조치 : 내부관리계획 수립. 시행, 정기적 직원 교육 등
나. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
다. 물리적 조치 : 전산실, 자료보관실 등의 접근통제

퍼스트클래스는 는 이용자 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다. 이용자 개개인이 본인의 개인정보를 보호하기 위해서 자신의 아이디(ID) 와 비밀번호를 적절하게 관리하고 이에 대한 책임을 져야 합니다.

10. 개인정보 관련 의견수렴 및 불만 처리에 관한 사항
퍼스트클래스는 개인정보보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 모든 절차와 방법을 마련하고 있습니다. 이용자들은 하단에 명시한 "13. 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처"항을 참고하여 전화나 메일을 통하여 불만사항을 신고할 수 있고, 퍼스트클래스는 이용자들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다.

11. 개인정보 보호책임자 및 담당자의 소속-성명 및 연락처
퍼스트클래스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

이　　  름   : 담당자 선정 필요
소속 / 직위　: 선정 필요
E-M A I L 　 : 선정 필요 
전 화 번 호　: 000-0000-0000


12. 이용자 및 법정대리인의 권리와 그 행사방법
가. 당사는 법정 대리인의 동의가 필요한 만 14세 미만 아동의 회원가입을 받고 있지 않습니다.

나. 이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지(동의철회)를 요청할 수도 있습니다.

다. 이용자의 개인정보 조회, 수정을 위해서는 로그인 후 My Page에서 ‘회원정보수정’을, 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보 보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.

라. 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.

마. 퍼스트클래스는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.

13. 권익침해 구제방법
이용자는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.
<아래의 기관은 회사와는 별개의 기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다>
▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
- 소관업무 : 개인정보 침해사실 신고, 상담 신청
- 홈페이지 : privacy.kisa.or.kr
- 전화 : (국번없이) 118
- 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터
▶ 개인정보 분쟁조정위원회
- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
- 홈페이지 : www.kopico.go.kr
- 전화 : (국번없이) 1833-6972
- 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 12층
▶ 대검찰청 사이버수사과 : http://www.spo.go.kr
▶ 경찰청 사이버안전국 : http://cyberbureau.police.go.kr

14. 고지의 의무
현 개인정보처리방침의 내용은 정부의 정책 또는 보안기술의 변경에 따라 내용의 추가 삭제 및 수정이 있을 시에는 홈페이지의 '공지사항'을 통해 고지할 것입니다.

개인정보처리방침 공고일자 : 2023.05.25
개인정보처리방침 시행일자 : 2023.05.25
`}
        />
      </p>
    </Description>
  );
}

function MarketingDescription() {
  return (
    <Description>
      <DescriptionTitle>마케팅 수신 동의</DescriptionTitle>
      <p>
        <DescriptionContent
          content={`회사는 다양하고 편리한 서비스를 제공하기 위해 아래의 정보를 고객의 동의를 받아 수집할 수 있으며, 선택사항의 동의를 거부하시는 경우에도 회원가입 및 대여 서비스 등 필수서비스는 이용할 수 있습니다.`}
        />
      </p>
      <DescriptionTable>
        <tr>
          <DescriptionTh colSpan={2}>구분</DescriptionTh>
          <DescriptionTh>수집항목</DescriptionTh>
          <DescriptionTh>이용 목적</DescriptionTh>
        </tr>
        <tr>
          <DescriptionTd textAlignCenter>회원가입</DescriptionTd>
          <DescriptionTd textAlignCenter>선택</DescriptionTd>
          <DescriptionTd textAlignCenter>
            생년월일, 성별, 혜택 수신정보
          </DescriptionTd>
          <DescriptionTd
            textAlignCenter
            dangerouslySetInnerHTML={{
              __html: replaceNewlineWithBr(`이벤트 및 혜택
                알림정보 등 마케팅 활용
                `),
            }}
          ></DescriptionTd>
        </tr>
      </DescriptionTable>
      <DescriptionSubTitle>[개인정보의 수집 방법]</DescriptionSubTitle>
      <DescriptionContent
        content={`회사는 이용자들이 회원서비스를 이용하기 위해 회원으로 가입하실 때 서비스 제공을 위한 필수적인 정보들을 온라인 상에서 입력 받고 있습니다. 또한 서비스 내에서의 설문조사나 이벤트 행사 시 통계분석이나 경품 제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할 것입니다`}
      ></DescriptionContent>
      <DescriptionSubTitle>[개인정보의 보유 및 이용기간]</DescriptionSubTitle>
      <DescriptionContent
        content={`(1) 개인정보의 수집 및 이용목적 또는 제공받은 목적이 달성되면 지체없이 파기합니다. 단, ‘전자상거래 등에서의 소비자 보호에 과한 법률’, ‘통신비밀보호법’과 같이 관계법률에 의하여 보존이 필요할 경우에는 그 기간 동안 보존합니다.
        (2) 회원이 12개월간 서비스 이용 기록이 없는 경우 ‘정보통신망 이용 촉진 및 정보보호 등에 관한 법률’ 제 29조에 근거하여 회원에게 사전 통지하고 다른 회원의 개인정보와 분리하여 보관합니다. 분리 보관된 개인정보는 법적 보관기간 경과 후 파기하며, 분리 보관되기 30일 전에 회원에게 분리 보관 사실과 항목, 기간 만료일 등을 전자우편·서면·모사전송·전화 또는 이와 유사한 방법 중 어느 하나의 방법으로 회원에게 알립니다.
        `}
      ></DescriptionContent>
    </Description>
  );
}

function replaceNewlineWithBr(text: string) {
  return text.replace(/\n/g, "<br>");
}

function Description({ children }: any) {
  return (
    <div>
      <Grid container sx={{ p: 1 }} alignItems={"center"}>
        {children}
      </Grid>
    </div>
  );
}
function DescriptionTitle({ children }: any) {
  return <Typography variant="h5">{children}</Typography>;
}
function DescriptionSubTitle({ children }: any) {
  return (
    <p>
      <Typography variant="h6">{children}</Typography>
    </p>
  );
}

function DescriptionContent({ content }: any) {
  return (
    <Typography variant="body1">
      {
        <div
          dangerouslySetInnerHTML={{
            __html: replaceNewlineWithBr(content),
          }}
        ></div>
      }
    </Typography>
  );
}
