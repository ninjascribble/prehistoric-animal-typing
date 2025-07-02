const words = [
    'proterosuchus',
    'tyrannosaurus rex',
    'triceratops',
    'velociraptor',
    'stegosaurus',
    'brachiosaurus',
    'smilodon',
    'mastodon',
    'pteranodon',
    'megatherium',
    'icthyosaurus',
    'plesiosaurus',
    'dunkleosteus',
    'archaeopteryx',    
    'liopleurodon',
    'pliosaurus',
    'dakosaurus',
    'deinonychus',
    'protoceratops',
    'sinornithosaurus',
    'concavenator',
    'anomalocaris',
    'kaprosuchus',
    'lystrosaurus',
    'dimetrodon',
]

export function setupWord(element) {
    const word = words[Math.floor(Math.random() * words.length)]
    element.textContent = word
}