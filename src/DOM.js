/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const insertTag = document.createElement(tag);
        const instertContent = document.createTextNode(content);
        insertTag.appendChild(instertContent);
        document.body.append(insertTag);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level, depth = 1) {
    let div = document.createElement('div');
    div.className = 'item_' + depth;
    if (level > 1) {
        for (let i = 0; i < childrenCount; i++) {
            div.appendChild(generateTree(childrenCount, level - 1, depth + 1));
        }
    }
    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    tree.childNodes.forEach((e) => {
        if (e.className == 'item_2') {
            let childs = e.childNodes;
            let section = document.createElement('section');
            section.className = 'item_2';
            while (e.childNodes.length > 0) {
                section.appendChild(e.childNodes[0]);
            }
            e.replaceWith(section);
        }
    });
    return tree;
}
