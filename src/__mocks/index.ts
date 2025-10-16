import { http, HttpResponse } from 'msw';
import { allCharacters, allReactions } from './data';
export const handlers = [
  http.get('/api/characters', ({ request }) => {
    const url = new URL(request.url);
    const searchName = url.searchParams.get('name') || '';
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const pageSize = parseInt(url.searchParams.get('limit') || '10', 10);
    let filteredData = allCharacters;
    if (searchName) {
      const lowerSearchName = searchName.toLowerCase();
      filteredData = allCharacters.filter(character =>
        character.name.toLowerCase().includes(lowerSearchName)
      );
    }
    const totalCount = filteredData.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedData = filteredData.slice(startIndex, endIndex);
    return HttpResponse.json({
      results: paginatedData,
      total: totalCount,
      page: page,
      limit: pageSize,
      next: page < totalPages ? `/api/characters?page=${page + 1}&limit=${pageSize}&name=${searchName}` : null,
      previous: page > 1 ? `/api/characters?page=${page - 1}&limit=${pageSize}&name=${searchName}` : null,
    }, { status: 200 });
  }),

  http.get('/api/reactions', () => {
    return HttpResponse.json({
      reactions: allReactions,
    }, { status: 200 });
  }),
];