const TONE_PROFILES = {
  '매우 정중함': {
    opening: {
      sms: '안녕하십니까.',
      phone: '안녕하십니까. 담당자입니다.',
      official: '안녕하십니까.',
    },
    closing: {
      sms: '번거로우시겠지만 협조해 주시면 감사하겠습니다.',
      phone: '감사합니다.',
      official: '귀하의 이해와 협조에 깊이 감사드립니다.',
    },
  },
  '일반 공공기관 스타일': {
    opening: {
      sms: '안녕하세요.',
      phone: '안녕하세요, 담당자입니다.',
      official: '안녕하세요.',
    },
    closing: {
      sms: '감사합니다.',
      phone: '감사합니다.',
      official: '감사합니다.',
    },
  },
  '단호하지만 정중함': {
    opening: {
      sms: '안녕하세요.',
      phone: '안녕하세요, 담당자입니다.',
      official: '안녕하세요.',
    },
    closing: {
      sms: '이점 양해해 주시기 바랍니다.',
      phone: '이점 양지하시기 바랍니다.',
      official: '이점 양지하여 주시기 바랍니다.',
    },
  },
  '부드럽고 친절함': {
    opening: {
      sms: '안녕하세요! 반갑습니다.',
      phone: '안녕하세요, 반갑습니다!',
      official: '안녕하세요.',
    },
    closing: {
      sms: '궁금한 점은 언제든지 연락 주세요. 감사합니다!',
      phone: '도움이 필요하시면 언제든지 연락해 주세요!',
      official: '항상 최선을 다해 도움드리겠습니다. 감사합니다.',
    },
  },
}

const BASE_TEMPLATES = {
  '서류 보완 요청': {
    '안내': {
      sms: '신청하신 건을 검토한 결과, {content}의 추가 제출이 필요하여 안내드립니다. 해당 서류를 준비하시어 제출해 주시면 신속히 처리하겠습니다.',
      phone: '신청하신 건을 검토한 결과, {content}의 추가 제출이 필요하여 연락드렸습니다. 해당 서류를 준비해서 제출해 주시겠어요?',
      official: '신청서 검토 결과, {content}의 추가 제출이 필요함을 알려드립니다. 빠른 처리를 위해 기한 내 제출을 부탁드립니다.',
    },
    '요청': {
      sms: '{content}를 추가로 제출해 주시기 바랍니다. 서류 제출 후 처리가 진행됩니다.',
      phone: '처리를 위해 {content} 제출이 필요합니다. 서류를 준비해서 제출해 주실 수 있으신가요?',
      official: '아래 서류의 추가 제출을 요청드립니다. ■ 제출 서류: {content}',
    },
    '거절': {
      sms: '검토 결과, {content}가 미비하여 현재로서는 처리가 어렵습니다. 서류 보완 후 재신청 부탁드립니다.',
      phone: '신청하신 건을 검토한 결과, {content}가 미비하여 현재 처리가 어렵습니다. 서류 보완 후 재신청해 주시기 바랍니다.',
      official: '검토 결과, {content} 미비로 인해 해당 신청의 처리가 불가합니다. 서류 보완 후 재신청하여 주시기 바랍니다.',
    },
    '사과': {
      sms: '서류 검토 과정에서 {content} 관련 안내가 늦어진 점 죄송합니다. 빠른 시일 내 처리될 수 있도록 하겠습니다.',
      phone: '{content} 관련 안내가 늦어진 점 정말 죄송합니다. 불편을 드려 다시 한번 사과드립니다.',
      official: '{content} 관련 처리 과정에서 불편을 드린 점에 대해 사과드립니다.',
    },
    '확인': {
      sms: '{content}가 제출되었는지 확인을 부탁드립니다. 미제출 시 처리가 지연될 수 있습니다.',
      phone: '{content}를 제출하셨는지 확인을 부탁드리겠습니다. 혹시 미제출이시라면 준비해 주시겠어요?',
      official: '{content}의 제출 여부를 확인하여 주시기 바랍니다.',
    },
    '협조 요청': {
      sms: '원활한 처리를 위해 {content} 제출에 협조 부탁드립니다.',
      phone: '원활한 처리를 위해 {content} 제출에 협조해 주시겠어요?',
      official: '{content} 제출에 대한 적극적인 협조를 요청드립니다.',
    },
  },
  '처리 지연 안내': {
    '안내': {
      sms: '신청하신 건의 처리가 {content}로 인해 다소 지연되고 있음을 안내드립니다. 빠른 시일 내 처리될 수 있도록 최선을 다하겠습니다.',
      phone: '신청하신 건의 처리가 {content}로 인해 예상보다 지연되고 있어 안내 연락드렸습니다.',
      official: '신청 건의 처리와 관련하여, {content}로 인해 처리 기간이 지연되고 있음을 알려드립니다.',
    },
    '요청': {
      sms: '처리 지연 관련하여 {content}를 요청드립니다. 협조해 주시면 신속 처리하겠습니다.',
      phone: '처리 지연으로 인해 {content}를 요청드리고자 연락드렸습니다.',
      official: '처리 지연과 관련하여 {content}를 요청드리오니 협조 부탁드립니다.',
    },
    '거절': {
      sms: '신청하신 건은 {content}로 인해 현재 처리가 어렵습니다. 상황 해소 후 재검토하겠습니다.',
      phone: '{content}로 인해 현재 처리가 어려운 상황입니다. 양해 부탁드립니다.',
      official: '{content}로 인해 현재 해당 신청의 처리가 불가합니다.',
    },
    '사과': {
      sms: '{content}로 인한 처리 지연으로 불편을 드려 진심으로 사과드립니다.',
      phone: '{content}로 인해 처리가 지연되어 정말 죄송합니다.',
      official: '{content}로 인한 처리 지연으로 불편을 드린 점 깊이 사과드립니다.',
    },
    '확인': {
      sms: '처리 지연과 관련하여 {content}를 확인해 주시기 바랍니다.',
      phone: '처리 진행 상황과 관련하여 {content}를 확인해 주실 수 있으신가요?',
      official: '{content}에 대한 확인을 요청드립니다.',
    },
    '협조 요청': {
      sms: '처리 지연 해소를 위해 {content}에 협조 부탁드립니다.',
      phone: '빠른 처리를 위해 {content}에 협조해 주시겠어요?',
      official: '처리 지연 해소를 위한 {content}에 대한 협조를 요청드립니다.',
    },
  },
  '신청 불가 안내': {
    '안내': {
      sms: '신청하신 건을 검토한 결과, {content}로 인해 현재 신청이 어려운 점을 안내드립니다.',
      phone: '신청하신 건을 검토한 결과, {content}로 인해 신청이 어렵습니다.',
      official: '신청 건 검토 결과, {content}에 해당하여 신청 불가 사유를 안내드립니다.',
    },
    '요청': {
      sms: '신청 불가 사유는 {content}입니다. 요건 충족 후 재신청 부탁드립니다.',
      phone: '{content}로 인해 신청이 불가합니다. 요건 충족 후 재신청해 주시겠어요?',
      official: '{content}의 요건을 충족하신 후 재신청하여 주시기 바랍니다.',
    },
    '거절': {
      sms: '검토 결과, {content}에 해당하여 신청이 불가합니다. 양해 부탁드립니다.',
      phone: '검토 결과, {content}로 인해 신청 처리가 어렵습니다. 양해해 주시기 바랍니다.',
      official: '신청 건 검토 결과, {content}에 해당하여 신청이 불가함을 알려드립니다.',
    },
    '사과': {
      sms: '신청 불가 안내로 불편을 드려 죄송합니다. {content}로 인한 사항이니 양해 바랍니다.',
      phone: '{content}로 인해 신청이 불가하여 불편드려 정말 죄송합니다.',
      official: '{content}로 인한 신청 불가 결정으로 불편을 드린 점 사과드립니다.',
    },
    '확인': {
      sms: '신청 불가 사유인 {content}를 확인해 주시기 바랍니다.',
      phone: '신청 불가 사유인 {content}를 확인해 주시겠어요?',
      official: '신청 불가 요건인 {content}의 충족 여부를 확인하여 주시기 바랍니다.',
    },
    '협조 요청': {
      sms: '신청 가능 요건 충족을 위한 {content}에 협조 부탁드립니다.',
      phone: '신청 요건 충족을 위한 {content}에 협조해 주시겠어요?',
      official: '신청 요건 충족을 위한 {content}에 대한 협조를 요청드립니다.',
    },
  },
  '방문 요청': {
    '안내': {
      sms: '관련 업무 처리를 위해 {content}에 방문하셔야 합니다. 방문 시 신분증을 지참해 주세요.',
      phone: '관련 업무 처리를 위해 {content}에 방문이 필요합니다. 방문 전 일정을 확인해 주시겠어요?',
      official: '해당 업무 처리를 위해 {content}에 방문하여 주시기 바랍니다. 방문 시 신분증을 지참하여 주십시오.',
    },
    '요청': {
      sms: '{content}에 직접 방문해 주시기 바랍니다. 방문 일정 사전 연락 부탁드립니다.',
      phone: '{content}에 방문해 주시겠어요? 미리 일정을 알려주시면 도움드리겠습니다.',
      official: '{content}에 방문하여 주시기를 요청드립니다.',
    },
    '거절': {
      sms: '해당 업무는 {content}로 인해 방문 처리가 어렵습니다.',
      phone: '{content}로 인해 현재 방문 처리가 어렵습니다. 양해 부탁드립니다.',
      official: '{content}로 인해 방문 처리가 불가합니다.',
    },
    '사과': {
      sms: '번거롭게 방문을 요청드려 죄송합니다. {content}로 인한 불가피한 사항이니 양해 바랍니다.',
      phone: '번거롭게 방문을 요청드려 죄송합니다. {content} 관련 업무입니다.',
      official: '방문 불편을 드리는 점에 대해 사과드립니다. {content}에 대한 처리를 위해 방문을 요청드립니다.',
    },
    '확인': {
      sms: '{content} 방문 가능 일정 확인 부탁드립니다.',
      phone: '{content}에 방문하실 수 있는 일정을 확인해 주시겠어요?',
      official: '{content}에 대한 방문 가능 일정을 확인하여 주시기 바랍니다.',
    },
    '협조 요청': {
      sms: '업무 처리를 위한 {content} 방문에 협조 부탁드립니다.',
      phone: '업무 처리를 위한 {content} 방문에 협조해 주시겠어요?',
      official: '{content}에 대한 방문 처리를 위한 협조를 요청드립니다.',
    },
  },
  '일정 조율': {
    '안내': {
      sms: '{content} 관련 일정 조율이 필요하여 안내드립니다.',
      phone: '{content} 관련 일정을 조율하고자 연락드렸습니다.',
      official: '{content}에 관한 일정 조율이 필요하여 안내드립니다.',
    },
    '요청': {
      sms: '{content} 가능한 일정을 알려주시기 바랍니다.',
      phone: '{content}에 편하신 일정을 알려주시겠어요?',
      official: '{content}에 대한 가능 일정을 회신하여 주시기 바랍니다.',
    },
    '거절': {
      sms: '{content}로 인해 요청하신 일정은 어렵습니다. 다른 일정을 제안해 주세요.',
      phone: '{content}로 인해 해당 일정은 어렵습니다. 다른 날짜는 가능하신가요?',
      official: '{content}로 인해 요청하신 일정에는 진행이 불가합니다. 가능한 일정을 재요청드립니다.',
    },
    '사과': {
      sms: '일정 변경으로 불편을 드려 죄송합니다. {content}로 인한 사항입니다.',
      phone: '일정이 변경되어 죄송합니다. {content}로 인한 부분이니 양해 부탁드립니다.',
      official: '{content}로 인한 일정 변경으로 불편을 드린 점 사과드립니다.',
    },
    '확인': {
      sms: '{content} 일정을 확인해 주시기 바랍니다.',
      phone: '{content} 일정을 확인해 주시겠어요?',
      official: '{content}에 대한 일정을 확인하여 주시기 바랍니다.',
    },
    '협조 요청': {
      sms: '원활한 업무 처리를 위한 {content} 일정 협조 부탁드립니다.',
      phone: '원활한 처리를 위해 {content} 일정에 협조해 주시겠어요?',
      official: '{content}에 대한 일정 조율의 협조를 요청드립니다.',
    },
  },
  '단순 사실 안내': {
    '안내': {
      sms: '{content}에 대해 안내드립니다. 추가 문의 사항이 있으시면 연락 주세요.',
      phone: '{content}에 대해 안내드리겠습니다.',
      official: '{content}에 대하여 다음과 같이 안내드립니다.',
    },
    '요청': {
      sms: '{content} 관련 내용을 확인하신 후 필요한 조치 부탁드립니다.',
      phone: '{content}에 대한 내용을 확인하시고 필요한 조치 부탁드립니다.',
      official: '{content}에 대해 확인하신 후 필요한 조치를 취하여 주시기 바랍니다.',
    },
    '거절': {
      sms: '{content}는 현재 제공이 어렵습니다. 담당 부서로 문의 바랍니다.',
      phone: '{content}는 현재 안내가 어렵습니다. 담당 부서로 문의해 주시기 바랍니다.',
      official: '{content}에 대한 안내는 현재 불가합니다. 담당 부서로 문의하여 주십시오.',
    },
    '사과': {
      sms: '{content} 관련 안내가 늦어진 점 죄송합니다.',
      phone: '{content} 관련 안내가 늦어져 죄송합니다.',
      official: '{content}에 대한 안내가 늦어진 점 사과드립니다.',
    },
    '확인': {
      sms: '{content}를 확인해 주시기 바랍니다.',
      phone: '{content}를 확인해 주시겠어요?',
      official: '{content}를 확인하여 주시기 바랍니다.',
    },
    '협조 요청': {
      sms: '{content} 관련 사항에 협조 부탁드립니다.',
      phone: '{content}에 협조해 주시겠어요?',
      official: '{content}에 대한 협조를 요청드립니다.',
    },
  },
  '오해 해소': {
    '안내': {
      sms: '{content}에 대해 정확한 내용을 안내드립니다. 오해 없으시길 바랍니다.',
      phone: '{content} 관련하여 정확한 내용을 안내드리겠습니다.',
      official: '{content}에 관한 정확한 내용을 안내드립니다.',
    },
    '요청': {
      sms: '{content}에 대한 오해 해소를 위해 추가 설명 확인 부탁드립니다.',
      phone: '{content}에 대해 추가 설명을 드릴 수 있을까요?',
      official: '{content}에 관한 정확한 내용 확인을 요청드립니다.',
    },
    '거절': {
      sms: '{content}는 사실과 다릅니다. 정확한 내용을 안내드립니다.',
      phone: '{content}는 사실이 아닙니다. 정확한 내용을 말씀드리겠습니다.',
      official: '{content}는 사실과 다름을 알려드립니다. 정확한 내용을 확인해 주시기 바랍니다.',
    },
    '사과': {
      sms: '{content}로 인해 오해가 발생한 점 사과드립니다. 정확한 내용을 안내드립니다.',
      phone: '{content}로 인해 오해를 드린 점 죄송합니다.',
      official: '{content}로 인한 오해 발생에 사과드립니다.',
    },
    '확인': {
      sms: '{content}에 대한 내용이 명확히 전달되었는지 확인 부탁드립니다.',
      phone: '{content}에 대한 내용이 이해되셨는지 확인해 주시겠어요?',
      official: '{content}에 관한 내용의 정확성을 확인하여 주시기 바랍니다.',
    },
    '협조 요청': {
      sms: '오해 해소를 위한 {content} 관련 협조 부탁드립니다.',
      phone: '오해 해소를 위해 {content}에 협조해 주시겠어요?',
      official: '오해 해소를 위한 {content}에 대한 협조를 요청드립니다.',
    },
  },
  '재안내': {
    '안내': {
      sms: '이전에 안내드린 {content} 관련 내용을 다시 한번 안내드립니다.',
      phone: '{content} 관련 내용을 다시 한번 안내드리겠습니다.',
      official: '{content}에 관하여 재안내 드립니다.',
    },
    '요청': {
      sms: '{content} 관련 내용 재확인 부탁드립니다.',
      phone: '{content}에 대해 다시 한번 확인해 주시겠어요?',
      official: '{content}에 대한 재확인을 요청드립니다.',
    },
    '거절': {
      sms: '이미 안내드린 바와 같이, {content}는 불가합니다.',
      phone: '이전에 안내드린 것처럼, {content}는 현재 어렵습니다.',
      official: '기안내드린 바와 같이, {content}에 대한 처리는 불가합니다.',
    },
    '사과': {
      sms: '안내가 불충분했던 점 죄송합니다. {content}에 대해 다시 안내드립니다.',
      phone: '안내가 명확하지 않아 죄송합니다. {content}를 다시 설명드리겠습니다.',
      official: '이전 안내가 충분하지 않았던 점에 대해 사과드립니다. {content}에 대해 재안내드립니다.',
    },
    '확인': {
      sms: '재안내드린 {content} 내용을 확인해 주시기 바랍니다.',
      phone: '다시 안내드린 {content}를 확인해 주시겠어요?',
      official: '재안내드린 {content}에 대한 확인을 요청드립니다.',
    },
    '협조 요청': {
      sms: '{content} 관련 재안내 사항에 협조 부탁드립니다.',
      phone: '{content} 재안내 사항에 협조해 주시겠어요?',
      official: '{content}에 대한 재안내 사항 이행에 협조를 요청드립니다.',
    },
  },
  '사과 및 양해 요청': {
    '안내': {
      sms: '{content}로 인해 불편을 드린 점 안내드립니다. 빠른 시일 내 해결하겠습니다.',
      phone: '{content}로 인한 불편 사항에 대해 안내드리겠습니다.',
      official: '{content}로 인하여 발생한 불편 사항에 대해 안내드립니다.',
    },
    '요청': {
      sms: '{content}에 대해 양해를 부탁드립니다.',
      phone: '{content}에 대해 양해해 주시겠어요?',
      official: '{content}에 대한 양해를 요청드립니다.',
    },
    '거절': {
      sms: '죄송하지만 {content}로 인해 해당 요청은 어렵습니다. 양해 부탁드립니다.',
      phone: '죄송하지만 {content}로 인해 처리가 어렵습니다. 이점 양해해 주시기 바랍니다.',
      official: '유감스럽게도 {content}로 인해 요청하신 사항의 처리가 불가합니다.',
    },
    '사과': {
      sms: '{content}로 인해 불편을 드린 점 진심으로 사과드립니다.',
      phone: '{content}로 인한 불편에 대해 진심으로 사과드립니다.',
      official: '{content}로 인한 불편 사항에 대해 깊이 사과드립니다.',
    },
    '확인': {
      sms: '{content} 관련 불편 사항이 해소되었는지 확인 부탁드립니다.',
      phone: '{content} 관련 불편 사항이 해소되셨는지 확인해 주시겠어요?',
      official: '{content}에 대한 불편 해소 여부를 확인하여 주시기 바랍니다.',
    },
    '협조 요청': {
      sms: '{content} 해결을 위한 협조 부탁드립니다.',
      phone: '{content} 해결을 위해 협조해 주시겠어요?',
      official: '{content} 해결을 위한 협조를 요청드립니다.',
    },
  },
}

function buildSentence(outputType, tone, complaintType, purpose, content, department, contact) {
  const profile = TONE_PROFILES[tone]
  const template = BASE_TEMPLATES[complaintType]?.[purpose]

  if (!profile || !template) return ''

  const opening = profile.opening[outputType]
  const closing = profile.closing[outputType]
  const body = template[outputType].replace(/\{content\}/g, content || '해당 내용')

  let postfix = ''
  if (department && outputType !== 'phone') {
    postfix += ` 담당 부서: ${department}.`
  }
  if (contact) {
    postfix += ` 문의: ${contact}.`
  }

  return `${opening} ${body} ${closing}${postfix}`.trim()
}

export function generateSentences(complaintType, purpose, tone, content, department, contact) {
  return {
    sms: buildSentence('sms', tone, complaintType, purpose, content, department, contact),
    phone: buildSentence('phone', tone, complaintType, purpose, content, department, contact),
    official: buildSentence('official', tone, complaintType, purpose, content, department, contact),
  }
}
