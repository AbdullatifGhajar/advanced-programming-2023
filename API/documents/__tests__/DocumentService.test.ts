import DB from '../../db/DB';
import MockDB from '../../db/MockDB';

import DocumentService from '../src/services/DocumentService';

function expectCorrectResultObject(result: any, expected: any) {
  expect(JSON.parse(JSON.stringify(result))).toEqual(expected);
}

describe('DocumentService', () => {
  let documentService: DocumentService;

  beforeAll(async () => {
    documentService = new DocumentService();
    // Mock the database instance
    jest.spyOn(DB, 'getInstance').mockReturnValue(MockDB.getInstance());
  });

  it('should return a list of documents with all their fields and approvals', async () => {
    const expectedDocuments = [
      {
        id: 1,
        name: 'Document 2',
        approvals: [
          {
            id: 2,
            isGiven: false,
            comment: 'You need to specify the purpose of the document',
            tutor: {
              id: 42,
              email: 'tutor@example.com',
              name: 'John Tutor',
              role: 'tutor',
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Document 1',
        approvals: [
          {
            id: 3,
            isGiven: null,
            comment: '',
            tutor: {
              id: 42,
              email: 'tutor@example.com',
              name: 'John Tutor',
              role: 'tutor',
            },
          },
        ],
      },
      {
        id: 3,
        name: 'Document 1',
        approvals: [
          {
            id: 4,
            isGiven: null,
            comment: '',
            tutor: {
              id: 43,
              email: 'tutor2@example.com',
              name: 'Jane Tutor',
              role: 'tutor',
            },
          },
          {
            id: 1,
            isGiven: true,
            comment: 'This is a good document',
            tutor: {
              id: 42,
              email: 'tutor@example.com',
              name: 'John Tutor',
              role: 'tutor',
            },
          },
        ],
      },
    ];

    const documentList = await documentService.list();

    expect(documentList).toBeDefined();
    expect(documentList.length).toBe(3);

    // expect the document list to contain deadlines
    expect(documentList[0].deadline).toBeDefined();
    expect(documentList[1].deadline).toBeDefined();
    expect(documentList[2].deadline).toBeDefined();

    // remove the deadlines from the documents
    const documentListWithoutDeadlines = documentList.map((document: any) => {
      const { deadline, ...rest } = document;
      return rest;
    });

    expectCorrectResultObject(documentListWithoutDeadlines, expectedDocuments);
  });

  it('should return one document by id', async () => {
    const expectedDocument = {
      id: 1,
      name: 'Document 2',
      fields: [
        { isChecked: true, id: 1, name: 'Happy?', type: 'checkbox' },
        { id: 3, name: 'Name', value: '', type: 'text' },
      ],
      approvals: [
        {
          id: 2,
          isGiven: false,
          comment: 'You need to specify the purpose of the document',
          tutor: {
            email: 'tutor@example.com',
            id: 42,
            name: 'John Tutor',
            role: 'tutor',
          },
        },
      ],
      student: {
        id: 2,
        email: 'student@example.com',
        name: 'John Student',
        role: 'student',
      },
    };

    const document = await documentService.document('1');

    expect(document).toBeDefined();

    // expect the document to contain a deadline
    expect(document.deadline).toBeDefined();

    // remove the deadline from the document
    const { deadline, ...rest } = document;

    expectCorrectResultObject(rest, expectedDocument);
  });
});
